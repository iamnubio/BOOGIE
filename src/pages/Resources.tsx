import React from 'react';

export function RESOURCES() {
  return (
    <div className="bg-gray-950/50 rounded-lg backdrop-blur-sm border border-pink-900/50 shadow-xl p-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
        RESOURCES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 rounded-lg p-4 border border-pink-900/30">
          <h2 className="text-xl font-semibold mb-3 text-pink-300">Road Map</h2>
          <p className="text-gray-400">Road Map coming soon</p>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-4 border border-pink-900/30">
          <h2 className="text-xl font-semibold mb-3 text-pink-300">Updates </h2>
          <p className="text-gray-400">Updates  coming soon</p>
        </div>
      </div>
    </div>
  );
}