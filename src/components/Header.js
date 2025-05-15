'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 header-transition header-mobile ${
          scrolled 
            ? 'bg-white shadow-md py-2 header-shadow header-solid' 
            : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-sky-600 font-bold text-2xl">
            aquaMind
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-sky-800 hover:text-sky-600 font-medium">
              Inicio
            </Link>
            <Link href="/blog" className="text-sky-800 hover:text-sky-600 font-medium">
              Blog
            </Link>
            <Link href="/cuantos-vasos-de-agua-al-dia" className="text-sky-800 hover:text-sky-600 font-medium">
              Calculadora
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button 
              className="text-sky-800 p-2" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden pt-20">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="text-xl font-medium text-sky-800 block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-xl font-medium text-sky-800 block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/cuantos-vasos-de-agua-al-dia" 
                  className="text-xl font-medium text-sky-800 block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Calculadora
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}