import React from 'react';

export function SUPPORT() {
  return (
    <div className="bg-gray-950/50 rounded-lg backdrop-blur-sm border border-pink-900/50 shadow-xl p-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
        SUPPORT
      </h1>
      <div className="space-y-6">
        <div className="bg-gray-900/50 rounded-lg p-4 border border-pink-900/30">
          <h2 className="text-xl font-semibold mb-3 text-pink-300">Contact Support</h2>
          <p className="text-gray-400">SUPPORT system coming soon</p>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-4 border border-pink-900/30">
          <h2 className="text-xl font-semibold mb-3 text-pink-300">FAQs</h2>
          <p className="text-gray-400">FAQs coming soon</p>
        </div>
      </div>
    </div>
  );
}