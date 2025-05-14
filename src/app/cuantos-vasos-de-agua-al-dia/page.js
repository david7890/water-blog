'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import SubscribeCTA from "@/components/SubscribeCTA";
import './styles.css';

export default function CuantosVasosDeAgua() {
  const [peso, setPeso] = useState('');
  const [unidad, setUnidad] = useState('kg');
  const [resultado, setResultado] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const calcularAgua = (e) => {
    e.preventDefault();
    
    if (peso && !isNaN(peso) && peso > 0) {
      let vasosDeAgua, litros, mililitros, onzas;
      
      if (unidad === 'kg') {
        // Método basado en Metabolismo Ultra Poderoso: peso en kg ÷ 7 = vasos de agua (250ml) diarios
        vasosDeAgua = (parseFloat(peso) / 7).toFixed(1);
        litros = (vasosDeAgua * 0.25).toFixed(1);
        mililitros = (litros * 1000).toFixed(0);
        onzas = (mililitros / 29.574).toFixed(0);
      } else {
        // Para libras: peso en lb ÷ 16 = vasos de agua (8 oz) diarios
        vasosDeAgua = (parseFloat(peso) / 16).toFixed(1);
        onzas = (vasosDeAgua * 8).toFixed(0);
        mililitros = (onzas * 29.574).toFixed(0);
        litros = (mililitros / 1000).toFixed(1);
      }
      
      setResultado({
        vasos: vasosDeAgua,
        litros: litros,
        mililitros: mililitros,
        onzas: onzas,
        unidad: unidad
      });
      
      setShowResult(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb para SEO */}
      <nav className="text-sm mb-6 text-sky-600">
        <ol className="flex">
          <li><Link href="/">Inicio</Link></li>
          <li><span className="mx-2">›</span></li>
          <li className="text-gray-600">¿Cuántos vasos de agua debes tomar al día?</li>
        </ol>
      </nav>

      {/* Encabezado Principal */}
      <h1 className="text-4xl font-bold text-sky-900 mb-6">¿Cuántos vasos de agua debes tomar al día?</h1>
      
      <div className="mb-10">
        <p className="text-lg text-sky-800 mb-4">
          La hidratación adecuada es clave para mantener una salud óptima, pero la cantidad exacta de agua que necesitas puede variar según características individuales.
        </p>
      </div>

      {/* Calculadora */}
      <div className="bg-white border border-sky-100 rounded-2xl overflow-hidden shadow-lg mb-12">
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-4">
          <h2 className="text-2xl font-bold text-white">Calculadora de Hidratación</h2>
          <p className="text-sky-100">Basada en principios de hidratación personalizada</p>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <form onSubmit={calcularAgua} className="space-y-6">
                <div>
                  <label htmlFor="peso" className="block text-lg font-medium text-gray-700 mb-2">
                    ¿Cuál es tu peso?
                  </label>
                  <div className="flex mb-2">
                    <input
                      type="number"
                      id="peso"
                      name="peso"
                      min="20"
                      max={unidad === 'kg' ? 200 : 440}
                      step="0.1"
                      placeholder={unidad === 'kg' ? "Ej: 70" : "Ej: 154"}
                      value={peso}
                      onChange={(e) => setPeso(e.target.value)}
                      className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none text-lg"
                      required
                    />
                    <span className="bg-gray-100 text-gray-700 px-4 py-3 rounded-r-lg border border-l-0 border-gray-300 flex items-center w-16 justify-center">
                      {unidad}
                    </span>
                  </div>
                  
                  <div className="flex gap-4 text-sm">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="unidad" 
                        value="kg" 
                        checked={unidad === 'kg'} 
                        onChange={() => setUnidad('kg')}
                        className="mr-1"
                      />
                      <span>Kilogramos (vasos de 250ml)</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="unidad" 
                        value="lb" 
                        checked={unidad === 'lb'} 
                        onChange={() => setUnidad('lb')}
                        className="mr-1"
                      />
                      <span>Libras (vasos de 8 oz)</span>
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
                >
                  Calcular mi consumo diario
                </button>
              </form>

              {showResult && resultado && (
                <div className="mt-8 bg-sky-50 p-6 rounded-xl border border-sky-100 animate-fade-in">
                  <h3 className="text-xl font-semibold text-sky-900 mb-3">Tu resultado personalizado:</h3>
                  <div className="flex items-center justify-center bg-white rounded-lg p-5 shadow-sm mb-4">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-sky-600 mb-2">{resultado.vasos}</div>
                      <div className="text-gray-600">vasos de agua al día</div>
                      <div className="text-sm text-gray-500 mt-1">
                        {resultado.unidad === 'kg' ? '(250ml por vaso)' : '(8 oz por vaso)'}
                      </div>
                    </div>
                  </div>
                  <p className="text-sky-800">
                    {resultado.unidad === 'kg' ? (
                      <>Esto equivale a <strong>{resultado.litros} litros</strong> o <strong>{resultado.mililitros} ml</strong> de agua diariamente.</>
                    ) : (
                      <>Esto equivale a <strong>{resultado.onzas} onzas</strong> o <strong>{resultado.litros} litros</strong> de agua diariamente.</>
                    )}
                  </p>
                  <div className="mt-4 text-sm text-gray-600">
                    <p>* Este cálculo está basado en el principio de hidratación personalizada según el peso corporal.</p>
                    <p className="mt-1">Fuente: Metabolismo Ultra Poderoso, Frank Suárez</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="md:w-1/2 bg-sky-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-sky-800 mb-4">¿Por qué es importante personalizar?</h3>
              <div className="space-y-4 text-sky-700">
                <p>
                  La recomendación clásica de "8 vasos al día" es un punto de partida general, pero no considera las diferencias individuales.
                </p>
                <p>
                  <strong>La fórmula de hidratación personalizada</strong> ajusta la ingesta de agua según tu peso corporal, ofreciendo una recomendación más precisa para tus necesidades específicas.
                </p>
                <p>
                  Las fórmulas utilizadas son simples pero efectivas:
                </p>
                <div className="bg-white p-4 rounded-lg space-y-2">
                  <p className="text-center font-medium">
                    Para kilos: Peso (kg) ÷ 7 = Vasos de agua diarios (250ml)
                  </p>
                  <p className="text-center font-medium">
                    Para libras: Peso (lb) ÷ 16 = Vasos de agua diarios (8 oz)
                  </p>
                </div>
                <p>
                  Este enfoque personalizado te ayuda a mantener un equilibrio óptimo de hidratación, evitando tanto la deshidratación como el exceso de agua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Información adicional */}
      <div className="bg-white rounded-xl overflow-hidden shadow-md mb-12">
        <div className="md:flex">
          <div className="md:w-1/3 relative h-60 md:h-auto">
            <Image
              src="/images/health.png"
              alt="Hidratación saludable"
              fill
              style={{objectFit: "cover"}}
            />
          </div>
          <div className="p-6 md:w-2/3">
            <h2 className="text-2xl font-bold text-sky-900 mb-4">Beneficios de la hidratación correcta</h2>
            <ul className="space-y-2 text-sky-700">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-sky-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Mejora el rendimiento físico y la resistencia</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-sky-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Aumenta la claridad mental y la concentración</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-sky-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Facilita la digestión y previene el estreñimiento</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-sky-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Mejora el aspecto de la piel</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-sky-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Ayuda a regular la temperatura corporal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Consejos rápidos */}
      <div className="bg-sky-50 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold text-sky-900 mb-6">Consejos para mantenerte hidratado</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg flex">
            <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-2xl text-sky-600">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-sky-800">Bebe un vaso al despertar</h3>
              <p className="text-sky-700 text-sm">Rehidrata tu cuerpo después del ayuno nocturno</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg flex">
            <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-2xl text-sky-600">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-sky-800">Lleva una botella contigo</h3>
              <p className="text-sky-700 text-sm">Tener agua a mano te recordará beberla</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg flex">
            <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-2xl text-sky-600">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-sky-800">Configura recordatorios</h3>
              <p className="text-sky-700 text-sm">Usa apps que te recuerden beber agua regularmente</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg flex">
            <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-2xl text-sky-600">4</span>
            </div>
            <div>
              <h3 className="font-semibold text-sky-800">Infusiona tu agua</h3>
              <p className="text-sky-700 text-sm">Añade frutas o hierbas para mejorar el sabor</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA - Ahora usando el componente */}
      <SubscribeCTA />
      
      {/* Compartir */}
      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-3">¿Te ha sido útil nuestra calculadora? Compártela:</p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
            </svg>
          </button>
          <button className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.4 13.9c-.8.4-1.6.7-2.4.8.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-1.5-1.7-4.1-1.8-5.7-.2-.8 1-1.1 2.4-.8 3.7C7 16.8 3.7 15 1.5 12c-.8 1.4-.4 3.2 1 4.1-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.5 3.1 3.9-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2 2.7 3.7 2.8-1.4 1.1-3.1 1.7-4.9 1.7-.3 0-.6 0-.9-.1 1.8 1.1 3.9 1.7 6 1.7 6.9 0 10.7-5.8 10.7-10.7v-.5c.8-.5 1.5-1.2 2-2z"></path>
            </svg>
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.11 19.4l-6.276-6.04 1.725-1.502 4.55 4.383 8.47-8.155 1.724 1.502-10.192 9.812z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 