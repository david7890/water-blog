import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// This component enhances the styling of the rendered Markdown content
const MarkdownContent = ({ content }) => {
  return (
    <div 
      className="prose prose-lg max-w-none 
                prose-headings:text-blue-700 
                prose-h1:text-3xl prose-h1:font-bold
                prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-8
                prose-h3:text-xl prose-h3:font-medium
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                prose-strong:text-blue-800 prose-strong:font-semibold
                prose-ul:list-disc prose-ul:ml-6
                prose-ol:list-decimal prose-ol:ml-6
                prose-li:my-1
                prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:pl-4 prose-blockquote:italic
                prose-img:rounded-lg
                prose-table:border-collapse
                prose-th:bg-blue-50 prose-th:p-2 prose-th:border prose-th:border-gray-300
                prose-td:p-2 prose-td:border prose-td:border-gray-300"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default MarkdownContent; 