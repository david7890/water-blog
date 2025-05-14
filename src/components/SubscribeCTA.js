"use client";

import { useState } from 'react';

export default function SubscribeCTA({ 
  title = "¿Quieres más consejos de hidratación?", 
  subtitle = "Suscríbete a nuestro boletín y recibe tips semanales personalizados", 
  buttonText = "Suscribirme",
  className = ""
}) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      // Aquí iría la lógica para enviar el email a tu sistema
      // Por ejemplo, usando fetch para enviar a una API
      
      // Simulamos un envío exitoso
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus('success');
      setEmail('');
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl px-6 py-8 text-white shadow-lg ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sky-100">{subtitle}</p>
      </div>
      
      {formStatus === 'success' ? (
        <div className="max-w-md mx-auto text-center bg-white/20 p-4 rounded-lg">
          <svg className="w-12 h-12 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <p className="mt-2 font-medium">¡Gracias por suscribirte! Pronto recibirás nuestro primer boletín.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="flex-grow px-4 py-3 rounded-lg focus:outline-none text-gray-800 bg-white border-2 border-white shadow-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              bg-yellow-400 text-sky-900 font-semibold px-6 py-3 rounded-lg 
              hover:bg-yellow-300 transition-colors shadow-md
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
            `}
          >
            {isSubmitting ? 'Enviando...' : buttonText}
          </button>
        </form>
      )}
      
      {formStatus === 'error' && (
        <p className="text-red-200 text-center mt-3 text-sm">
          Ha ocurrido un error. Por favor, inténtalo de nuevo.
        </p>
      )}
    </div>
  );
} 