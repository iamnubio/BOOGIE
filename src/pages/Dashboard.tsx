import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Dashboard() {
  const [news, setNews] = useState([]);
  const [statistics, setStatistics] = useState([]);
  const apiKey = '62fe3280-d3a0-4c54-bbe4-21df7ada6db9'; // Replace with your actual API key

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://content.guardianapis.com/search?q=intent+data+leads&api-key=${apiKey}`
        );
        console.log('News Response:', response.data);
        setNews(response.data.response.results || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    const fetchStatistics = async () => {
      try {
        const response = await axios.get(
          `https://content.guardianapis.com/search?q=artificial+intelligence&api-key=${apiKey}`
        );
        console.log('Statistics Response:', response.data);
        setStatistics(response.data.response.results || []);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchNews();
    fetchStatistics();
  }, [apiKey]);

  return (
    <div className="bg-gray-950/50 rounded-lg backdrop-blur-sm border border-teal-900/50 shadow-xl p-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text text-transparent">
        DASHBOARD
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 rounded-lg p-4 border border-teal-900/30">
          <h2 className="text-xl font-semibold mb-3 text-teal-300">Recent Activity</h2>
          {news.length > 0 ? (
            news.map((item, index) => (
              <div key={index} className="mb-2">
                <a href={item.webUrl} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:underline">
                  {item.webTitle}
                </a>
                <p className="text-gray-400 text-sm">{item.sectionName}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No recent activity to display</p>
          )}
        </div>
        <div className="bg-gray-900/50 rounded-lg p-4 border border-teal-900/30">
          <h2 className="text-xl font-semibold mb-3 text-teal-300">AI News Statistics</h2>
          {statistics.length > 0 ? (
            statistics.map((item, index) => (
              <div key={index} className="mb-2">
                <a href={item.webUrl} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:underline">
                  {item.webTitle}
                </a>
                <p className="text-gray-400 text-sm">{item.sectionName}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No AI news statistics available</p>
          )}
        </div>
      </div>
    </div>
  );
}