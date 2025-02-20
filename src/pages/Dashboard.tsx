import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function DASHBOARD() {
  const [animeNews, setAnimeNews] = useState([]);
  const [trendingGames, setTrendingGames] = useState([]);

  const RAWG_API_KEY = '4ca6729320db4850ac034d14bdbffafd'; // Replace with your actual API key

  useEffect(() => {
    // Fetch Top Anime Rankings from Jikan API
    axios.get('https://api.jikan.moe/v4/top/anime')
      .then(response => {
        setAnimeNews(response.data.data.slice(0, 5)); // Top 5 Anime Rankings
      })
      .catch(error => console.error('Error fetching anime rankings:', error));

    // Fetch Currently Trending Games from RAWG API
    axios.get(`https://api.rawg.io/api/games?ordering=-added&page_size=5&key=${RAWG_API_KEY}`)
      .then(response => {
        setTrendingGames(response.data.results); // Top 5 Most Popular Games Recently
      })
      .catch(error => console.error('Error fetching trending games:', error));
  }, []);

  return (
    <div className="bg-gray-950/50 rounded-lg backdrop-blur-sm border border-pink-900/50 shadow-xl p-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
        DASHBOARD
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 rounded-lg p-4 border border-pink-900/30">
          <h2 className="text-xl font-semibold mb-3 text-pink-300">Current Anime Ranking</h2>
          {animeNews.length > 0 ? (
            animeNews.map((anime, index) => (
              <div key={index} className="mb-2">
                <a href={anime.url} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:underline">
                  {anime.title}
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No Current Anime Ranking to display</p>
          )}
        </div>

        <div className="bg-gray-900/50 rounded-lg p-4 border border-pink-900/30">
          <h2 className="text-xl font-semibold mb-3 text-pink-300">Currently Trending Games</h2>
          {trendingGames.length > 0 ? (
            trendingGames.map((game, index) => (
              <div key={index} className="mb-2">
                <a href={game.website || '#'} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:underline">
                  {game.name} (Rating: {game.rating || 'N/A'})
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No trending games available</p>
          )}
        </div>
      </div>
    </div>
  );
}















