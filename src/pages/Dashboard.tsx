import React from 'react';

export function Dashboard() {
  return (
    <div className="bg-[#085659]/30 rounded-lg backdrop-blur-sm border border-[#0c8388]/50 shadow-xl p-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#0c8388] via-[#085659] to-[#0c8388] bg-clip-text text-transparent">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#085659]/30 rounded-lg p-4 border border-[#0c8388]/30">
          <h2 className="text-xl font-semibold mb-3 text-[#e6e6e6]">Recent Activity</h2>
          <p className="text-[#e6e6e6]/70">No recent activity to display</p>
        </div>
        <div className="bg-[#085659]/30 rounded-lg p-4 border border-[#0c8388]/30">
          <h2 className="text-xl font-semibold mb-3 text-[#e6e6e6]">Statistics</h2>
          <p className="text-[#e6e6e6]/70">No statistics available</p>
        </div>
      </div>
    </div>
  );
}