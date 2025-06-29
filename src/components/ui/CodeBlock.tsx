import React from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  title?: string;
}

export default function CodeBlock({ children, language = 'text', title }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    const text = typeof children === 'string' ? children : '';
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden border border-gray-700 shadow-lg select-text">
        <div className="bg-gray-800 dark:bg-gray-900 px-4 py-2 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-gray-300 text-sm font-medium">{title || 'Code'}</span>
            <button
              onClick={copyToClipboard}
              className="text-gray-400 hover:text-gray-200 transition-all duration-200 flex items-center space-x-2 px-3 py-1.5 rounded-md hover:bg-gray-700 group"
              title="Copy code"
            >
              {copied ? (
                <div className="flex items-center space-x-1">
                  <Check className="h-4 w-4" />
                  <span className="text-xs font-medium">Copied!</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1">
                  <Copy className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
                </div>
              )}
            </button>
          </div>
        </div>
      <pre className="p-4 overflow-x-auto select-text">
        <code className="text-gray-100 text-sm font-mono whitespace-pre-wrap break-words select-text cursor-text">
          {children}
        </code>
      </pre>
    </div>
  );
}