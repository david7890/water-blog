import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getPostSlugs } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import MarkdownContent from '@/components/MarkdownContent';

// Generate metadata for each page dynamically
export async function generateMetadata({ params }) {
  try {
    const post = getPostBySlug(params.slug);
    
    if (!post) {
      return {
        title: 'Post no encontrado',
        description: 'El artículo que buscas no existe'
      };
    }
    
    return {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      openGraph: {
        images: [post.frontmatter.coverImage],
      },
    };
  } catch (error) {
    return {
      title: 'Error',
      description: 'Ocurrió un error al cargar este artículo'
    };
  }
}

// Generate static paths at build time
export function generateStaticParams() {
  const posts = getPostSlugs();
  return posts.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export default function BlogPost({ params }) {
  try {
    const post = getPostBySlug(params.slug);
    
    if (!post) {
      notFound();
    }
    
    return (
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back to blog link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Volver al blog
        </Link>
        
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.frontmatter.tags?.map((tag) => (
              <Link 
                key={tag} 
                href={`/blog/tags/${tag}`}
                className="text-sm text-blue-600 px-3 py-1 bg-blue-50 rounded-full hover:bg-blue-100 transition"
              >
                {tag}
              </Link>
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.frontmatter.title}</h1>
          <div className="flex items-center justify-between text-gray-600 mb-8">
            <span>Por {post.frontmatter.author || 'Admin'}</span>
            <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
          </div>
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.frontmatter.coverImage || "https://images.unsplash.com/photo-1548839140-29a749e7b8dd?q=80&w=1600"}
              alt={post.frontmatter.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </header>
        
        {/* Article content using the MarkdownContent component */}
        <MarkdownContent content={post.content} />
        
        {/* Footer - Related posts could be added here */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">¿Te ha gustado este artículo?</h2>
          <p className="mb-4">Compártelo en tus redes sociales y ayuda a más personas a mantenerse hidratadas.</p>
          
          {/* Social sharing buttons would go here */}
          <div className="flex space-x-4">
            {/* Example share button */}
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Compartir
            </button>
          </div>
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}