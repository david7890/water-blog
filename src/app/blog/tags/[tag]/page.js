import Link from 'next/link';
import Image from 'next/image';
import { getPostsByTag, getAllTags } from '@/lib/markdown';

// Generate metadata for each tag page
export async function generateMetadata({ params }) {
  return {
    title: `Artículos sobre ${params.tag} | Blog de Agua`,
    description: `Lee todos nuestros artículos relacionados con ${params.tag} y la importancia del agua`,
  };
}

// Generate static paths for all tags
export function generateStaticParams() {
  try {
    const tags = getAllTags();
    return tags.map((tag) => ({
      tag,
    }));
  } catch (error) {
    console.error('Error generating static paths for tags:', error);
    return [];
  }
}

export default function TagPage({ params }) {
  const { tag } = params;
  let posts = [];
  
  try {
    posts = getPostsByTag(tag);
  } catch (error) {
    console.error(`Error loading posts for tag "${tag}":`, error);
    // Continue with empty posts array
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/blog" 
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Volver al blog
      </Link>
      
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Artículos sobre {tag}</h1>
        <p className="text-gray-600">
          Encuentra información relevante sobre {tag} y la importancia del agua en tu vida diaria.
        </p>
      </header>
      
      {posts.length === 0 ? (
        <div className="text-center py-8">
          <h2 className="text-xl font-bold mb-2">No hay artículos disponibles</h2>
          <p className="text-gray-600 mb-4">
            No hemos encontrado artículos con la etiqueta &ldquo;{tag}&rdquo;.
          </p>
          <Link 
            href="/blog" 
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Ver todos los artículos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <Link href={`/blog/${post.slug}`} className="block relative h-48">
                <Image
                  src={post.frontmatter.coverImage || "https://images.unsplash.com/photo-1548839140-29a749e7b8dd?q=80&w=1600"}
                  alt={post.frontmatter.title}
                  fill
                  className="object-cover"
                />
              </Link>
              <div className="p-4">
                <div className="flex gap-2 mb-2">
                  {post.frontmatter.tags?.map((postTag) => (
                    <span 
                      key={postTag} 
                      className={`text-xs px-2 py-1 rounded-full ${
                        postTag === tag 
                          ? 'bg-blue-600 text-white' 
                          : 'text-blue-600 bg-blue-50'
                      }`}
                    >
                      {postTag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition">
                  <Link href={`/blog/${post.slug}`}>
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  {post.frontmatter.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {post.frontmatter.date}
                  </span>
                  <span className="text-sm font-medium">
                    Por {post.frontmatter.author || 'Admin'}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
} 