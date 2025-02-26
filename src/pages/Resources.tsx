import React from 'react';

export function Resources() {
  return (
    <div className="bg-gray-950/50 rounded-lg backdrop-blur-sm border border-teal-900/50 shadow-xl p-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text text-transparent">
        Resources
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Documentation Section */}
        <div className="bg-gray-900/50 rounded-lg p-4 border border-teal-900/30">
          <h2 className="text-xl font-semibold mb-3 text-teal-300">Documentation</h2>
          <a 
            href="https://www.amazon.ca/s?k=KD+Witter&i=audible" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-b from-gray-900 to-teal-950 px-2 py-2 sm:px-4 sm:py-3 rounded-xl text-gray-200 font-medium shadow-lg hover:from-gray-800 hover:to-teal-900 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1 sm:gap-2"
          >
            View Publications
          </a>
        </div>

        {/* Tutorials Section */}
        <div className="bg-gray-900/50 rounded-lg p-4 border border-teal-900/30">
          <h2 className="text-xl font-semibold mb-3 text-teal-300">Tutorials</h2>
          <a 
            href="https://www.youtube.com/playlist?list=PLlpNcDqA3ck2LVYXpckDbtZ3UUQlXhc8P" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-b from-gray-900 to-teal-950 px-2 py-2 sm:px-4 sm:py-3 rounded-xl text-gray-200 font-medium shadow-lg hover:from-gray-800 hover:to-teal-900 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1 sm:gap-2"
          >
            View Tutorials
          </a>
        </div>
      </div>
    </div>
  );
}
