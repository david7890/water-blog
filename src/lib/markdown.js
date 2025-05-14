import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// Directory where our posts are stored
const postsDirectory = path.join(process.cwd(), 'content/posts');

// Get all post slugs
export function getPostSlugs() {
  try {
    return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error('Error reading post directory:', error);
    return [];
  }
}

// Get post data by slug
export function getPostBySlug(slug) {
  try {
    // Normalize the slug by removing .md extension if present
    const realSlug = slug.replace(/\.md$/, '');
    
    // Check for exact match first
    let fullPath = path.join(postsDirectory, `${realSlug}.md`);
    
    // If file doesn't exist, try case-insensitive match
    if (!fs.existsSync(fullPath)) {
      const allFiles = fs.readdirSync(postsDirectory);
      const matchingFile = allFiles.find(
        file => file.toLowerCase().replace(/\.md$/, '') === realSlug.toLowerCase()
      );
      
      if (matchingFile) {
        fullPath = path.join(postsDirectory, matchingFile);
      } else {
        // No matching file found
        return null;
      }
    }
    
    // Read file contents
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);
    
    // Convert markdown to HTML using marked
    const contentHtml = marked(content);
    
    return {
      slug: realSlug,
      frontmatter: data,
      content: contentHtml,
      rawContent: content,
    };
  } catch (error) {
    console.error(`Error getting post by slug "${slug}":`, error);
    return null;
  }
}

// Get all posts with data
export function getAllPosts() {
  try {
    const slugs = getPostSlugs();
    const posts = slugs
      .map((slug) => getPostBySlug(slug))
      .filter(post => post !== null) // Filter out any null posts
      .sort((post1, post2) => (new Date(post1.frontmatter.date) > new Date(post2.frontmatter.date) ? -1 : 1));
    
    return posts;
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

// Get posts by tag
export function getPostsByTag(tag) {
  try {
    const posts = getAllPosts();
    return posts.filter(post => post.frontmatter.tags && post.frontmatter.tags.includes(tag));
  } catch (error) {
    console.error(`Error getting posts by tag "${tag}":`, error);
    return [];
  }
}

// Get all unique tags
export function getAllTags() {
  try {
    const posts = getAllPosts();
    const allTags = new Set();
    
    posts.forEach(post => {
      if (post.frontmatter.tags) {
        post.frontmatter.tags.forEach(tag => allTags.add(tag));
      }
    });
    
    return Array.from(allTags);
  } catch (error) {
    console.error('Error getting all tags:', error);
    return [];
  }
} 