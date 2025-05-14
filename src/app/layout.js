import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "aquaMind - Hidratación Consciente",
  description: "Blog interactivo sobre la importancia de tomar agua regularmente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed w-full bg-sky-50/80 backdrop-blur-sm border-b border-sky-100 z-10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-sky-600 hover:text-sky-700 transition-colors">
              aquaMind
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/" className="text-sky-700 hover:text-sky-500 transition-colors">Inicio</Link></li>
                <li><Link href="/beneficios" className="text-sky-700 hover:text-sky-500 transition-colors">Beneficios</Link></li>
                <li><Link href="/consejos" className="text-sky-700 hover:text-sky-500 transition-colors">Consejos</Link></li>
                <li><Link href="/blog" className="text-sky-700 hover:text-sky-500 transition-colors">Blog</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="pt-20">
          {children}
        </main>
        <footer className="bg-sky-900 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Link href="/" className="text-xl font-bold mb-4 inline-block hover:text-sky-200 transition-colors">
                  aquaMind
                </Link>
                <p className="text-sky-100 mt-2">Promoviendo la hidratación consciente para una vida más saludable y plena.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Enlaces</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-sky-200 hover:text-white transition-colors">Inicio</Link></li>
                  <li><Link href="/beneficios" className="text-sky-200 hover:text-white transition-colors">Beneficios</Link></li>
                  <li><Link href="/consejos" className="text-sky-200 hover:text-white transition-colors">Consejos</Link></li>
                  <li><Link href="/blog" className="text-sky-200 hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Contacto</h4>
                <p className="text-sky-100">Síguenos en nuestras redes sociales para más información y consejos.</p>
                <div className="flex space-x-4 mt-3">
                  <a href="#" className="text-sky-200 hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="text-sky-200 hover:text-white transition-colors">Twitter</a>
                  <a href="#" className="text-sky-200 hover:text-white transition-colors">Facebook</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-sky-700 text-center text-sky-300">
              <p>© {new Date().getFullYear()} aquaMind. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
