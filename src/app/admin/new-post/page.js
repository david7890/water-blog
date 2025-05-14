'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { marked } from 'marked';
import MarkdownContent from '@/components/MarkdownContent';

export default function NewPostPage() {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    author: '',
    coverImage: '',
    tags: '',
    content: `# Tu título aquí

Escribe el contenido de tu post usando Markdown.

## Subtítulo

- Lista
- De
- Elementos

1. Lista
2. Numerada

**Texto en negrita** y *texto en cursiva*

[Enlace](https://example.com)

> Cita importante sobre la hidratación

Incluye una tabla:

| Columna 1 | Columna 2 |
|-----------|-----------|
| Dato 1    | Dato 2    |
| Dato 3    | Dato 4    |

`
  });

  const [previewMode, setPreviewMode] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const slug = generateSlug(formData.title);
    const date = new Date().toISOString().split('T')[0];
    const tags = formData.tags.split(',').map(tag => tag.trim());
    
    const markdown = `---
title: '${formData.title}'
date: '${date}'
excerpt: '${formData.excerpt}'
author: '${formData.author}'
coverImage: '${formData.coverImage}'
tags: [${tags.map(tag => `'${tag}'`).join(', ')}]
---

${formData.content}`;

    setGeneratedCode(markdown);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link 
        href="/blog" 
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Volver al blog
      </Link>
      
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Crear Nuevo Artículo</h1>
      
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setPreviewMode(!previewMode)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {previewMode ? 'Editar' : 'Vista Previa'}
        </button>
      </div>
      
      {!previewMode ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block font-medium mb-1">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="excerpt" className="block font-medium mb-1">Extracto</label>
            <input
              type="text"
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="author" className="block font-medium mb-1">Autor</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="coverImage" className="block font-medium mb-1">URL de imagen de portada</label>
            <input
              type="url"
              id="coverImage"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="tags" className="block font-medium mb-1">Etiquetas (separadas por comas)</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="content" className="block font-medium mb-1">Contenido (Markdown)</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md font-mono h-96"
              required
            />
          </div>
          
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Generar Markdown
          </button>
        </form>
      ) : (
        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{formData.title || 'Vista Previa'}</h2>
          
          <div className="mb-4">
            <span className="text-sm text-gray-500">
              Por {formData.author || 'Autor'}
            </span>
          </div>
          
          <MarkdownContent content={marked(formData.content)} />
        </div>
      )}
      
      {generatedCode && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Código Markdown Generado</h2>
          <p className="text-sm text-gray-600 mb-2">
            Copia este código y guárdalo como un archivo .md en la carpeta de posts.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm font-mono">
            {generatedCode}
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(generatedCode)}
            className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition text-sm"
          >
            Copiar al portapapeles
          </button>
        </div>
      )}
    </div>
  );
} 