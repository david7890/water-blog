import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getAllTags } from '@/lib/markdown';

export const metadata = {
  title: 'Blog sobre la importancia del agua',
  description: 'Artículos sobre hidratación, salud y bienestar relacionados con el consumo de agua',
};

export default function BlogPage() {
  // Get posts and tags with error handling
  let posts = [];
  let tags = [];
  
  try {
    posts = getAllPosts();
    tags = getAllTags();
  } catch (error) {
    console.error('Error loading blog data:', error);
    // Continue with empty arrays
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center mr-4 text-blue-600 hover:text-blue-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Volver al inicio
        </Link>
        <h1 className="text-3xl font-bold text-blue-600">Blog sobre Hidratación</h1>
      </div>
      
      {/* Tags navigation */}
      {tags.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Temas</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tags/${tag}`}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Posts grid */}
      {posts.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">No hay artículos disponibles</h2>
          <p className="text-gray-600 mb-8">Estamos trabajando en nuevos contenidos. Vuelve pronto para encontrar artículos interesantes sobre hidratación.</p>
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Volver a la página principal
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
                  {post.frontmatter.tags?.map((tag) => (
                    <span key={tag} className="text-xs text-blue-600 px-2 py-1 bg-blue-50 rounded-full">
                      {tag}
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