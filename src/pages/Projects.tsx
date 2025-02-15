import React from 'react';

export function Projects() {
  return (
    <div className="bg-gray-950/50 rounded-lg backdrop-blur-sm border border-blue-900/50 shadow-xl p-6">
      **//<h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#085659] via-[#0c8388] to-[#085659] bg-clip-text text-transparent">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-gray-900/50 rounded-lg p-4 border border-blue-900/30">
          <h2 className="text-xl font-semibold mb-2 text-blue-300">Project List</h2>
          <p className="text-gray-400">No projects created yet</p>
        </div>
      </div>
    </div>
  );
}