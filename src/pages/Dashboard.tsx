import React from 'react';

export function DASHBOARD() {
  const graphicArtNews = [
    { webTitle: 'New Graphic Art Trends', webUrl: '#' },
    { webTitle: 'Upcoming Graphic Art Exhibitions', webUrl: '#' },
  ];

  const animeStatistics = [
    { webTitle: 'Anime Industry Growth in 2024', webUrl: '#' },
    { webTitle: 'Top-Grossing Anime Films', webUrl: '#' },
  ];

  return (
    <div className="bg-gray-950/50 rounded-lg backdrop-blur-sm border border-teal-900/50 shadow-xl p-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text text-transparent">
        DASHBOARD
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 rounded-lg p-4 border border-teal-900/30">
          <h2 className="text-xl font-semibold mb-3 text-teal-300">Recent Activity</h2>
          {graphicArtNews.length > 0 ? (
            graphicArtNews.map((item, index) => (
              <div key={index} className="mb-2">
                <a href={item.webUrl} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:underline">
                  {item.webTitle}
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No recent activity to display</p>
          )}
        </div>

        <div className="bg-gray-900/50 rounded-lg p-4 border border-teal-900/30">
          <h2 className="text-xl font-semibold mb-3 text-teal-300">Statistics</h2>
          {animeStatistics.length > 0 ? (
            animeStatistics.map((item, index) => (
              <div key={index} className="mb-2">
                <a href={item.webUrl} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:underline">
                  {item.webTitle}
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No anime statistics available</p>
          )}
        </div>
      </div>
    </div>
  );
}






