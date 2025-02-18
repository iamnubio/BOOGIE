import React from 'react';

export function PROJECTS() {
  return (
    <div className="bg-gray-950/50 rounded-lg backdrop-blur-sm border border-pink-900/50 shadow-xl p-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
        PROJECTS
      </h1>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-gray-900/50 rounded-lg p-4 border border-pink-900/30">
          <h2 className="text-xl font-semibold mb-2 text-pink-300">Project List</h2>
          <p className="text-gray-400">GO MOTO Animation Series - In a divided future Earth, two contrasting societies exist side by side: a strictly controlled government regime and a free-wheeling autonomous zone. While advanced humanoid machines serve throughout both regions, rumors persist of rare units that transcend their programming. The central conflict emerges from these societies' opposing views on digital currency and personal freedom, drawing people and machines alike into their ideological clash.</p>
        </div>
      </div>
    </div>
  );
}