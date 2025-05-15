import Image from "next/image";
import Link from "next/link";
import SubscribeCTA from "@/components/SubscribeCTA";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 flex items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4">Descubre el poder de la hidratación</h2>
              <p className="text-lg text-sky-700 mb-6">Tomar agua regularmente es esencial para mantener un cuerpo sano y una mente clara. Aprende con nosotros la importancia de este hábito vital.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-0">
                <Link href="/cuantos-vasos-de-agua-al-dia" className="px-6 py-3 bg-sky-600 text-white rounded-full shadow-lg hover:bg-sky-700 transition-colors font-semibold text-center">
                  Descubre cuánta agua necesitas
                </Link>
                <a href="#" className="px-6 py-3 border border-sky-600 text-sky-600 rounded-full hover:bg-sky-50 transition-colors font-semibold text-center">
                  Leer más
                </a>
              </div>
            </div>
            
            {/* Hero Image - Modified for better mobile display */}
            <div className="w-full md:w-1/2">
              <div className="hero-image-container w-full h-64 sm:h-80 md:h-96 relative mx-auto max-w-md md:max-w-full">
                <Image
                  src="/images/hero-image.png"
                  alt="Vaso de agua cristalina"
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Banner - NUEVO */}
      <section className="py-10 bg-gradient-to-r from-sky-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg border border-sky-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100 rounded-full -mt-20 -mr-20 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full -mb-20 -ml-20 opacity-50"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center p-6 md:p-10">
              <div className="md:w-3/5 mb-6 md:mb-0 md:pr-8">
                <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-4">Artículo destacado</span>
                <h3 className="text-2xl md:text-3xl font-bold text-sky-900 mb-4">¿Cuántos vasos de agua debes tomar al día?</h3>
                <p className="text-sky-700 mb-6">Descubre la cantidad exacta de agua que necesitas según tu peso, actividad física y condiciones de salud particulares. Una guía completa respaldada por investigaciones científicas.</p>
                <Link href="/cuantos-vasos-de-agua-al-dia" className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-full shadow-md hover:bg-sky-700 transition-colors font-semibold">
                  <span>Leer guía completa</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <div className="md:w-2/5">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-md mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="/images/featured-banner.png"
                    alt="Vasos de agua para hidratación diaria"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">Artículo más leído</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <SubscribeCTA 
            title="¿Estás tomando suficiente agua hoy?" 
            subtitle="Únete a nuestra comunidad y recibe consejos personalizados para mantener una hidratación óptima todos los días."
            className="bg-transparent shadow-none" 
          />
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-sky-800">Últimos artículos</h2>
            <Link href="/blog" className="text-sky-600 hover:text-sky-700 font-semibold">Ver todos →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link href="/blog/mejores-horas-para-hidratarse" className="block relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Botella de agua"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Link>
              <div className="p-6">
                <span className="text-xs font-semibold text-sky-600 uppercase">Consejos</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">
                  <Link href="/blog/mejores-horas-para-hidratarse" className="hover:text-sky-600 transition-colors">
                    Las mejores horas del día para hidratarse
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">Descubre cuáles son los momentos clave para beber agua y maximizar sus beneficios para tu cuerpo.</p>
                <Link href="/blog/mejores-horas-para-hidratarse" className="text-sky-600 hover:text-sky-700 font-medium">Leer más →</Link>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link href="/blog/aguas-infusionadas" className="block relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Frutas en agua"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Link>
              <div className="p-6">
                <span className="text-xs font-semibold text-sky-600 uppercase">Recetas</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">
                  <Link href="/blog/aguas-infusionadas" className="hover:text-sky-600 transition-colors">
                    5 aguas infusionadas para variar tu hidratación
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">Alternativas deliciosas y saludables para quienes encuentran aburrido beber agua natural.</p>
                <Link href="/blog/aguas-infusionadas" className="text-sky-600 hover:text-sky-700 font-medium">Leer más →</Link>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link href="/blog/deshidratacion-y-rendimiento" className="block relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1559839914-17aae19cec71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Persona bebiendo agua"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Link>
              <div className="p-6">
                <span className="text-xs font-semibold text-sky-600 uppercase">Salud</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">
                  <Link href="/blog/deshidratacion-y-rendimiento" className="hover:text-sky-600 transition-colors">
                    Cómo la deshidratación afecta tu rendimiento
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">Estudio revela el impacto negativo de la deshidratación leve en la concentración y el rendimiento físico.</p>
                <Link href="/blog/deshidratacion-y-rendimiento" className="text-sky-600 hover:text-sky-700 font-medium">Leer más →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
