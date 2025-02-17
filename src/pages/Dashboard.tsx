export function Dashboard() {
  const [news, setNews] = useState([]);
  const [statistics, setStatistics] = useState([]);
  const apiKey = 'YOUR_API_KEY'; // Replace with your News API key

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=cnn&apiKey=59129091305a4ee3b94267159aa5b9f0`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    const fetchStatistics = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=artificial+intelligence+usage&apiKey=59129091305a4ee3b94267159aa5b9f0`
        );
        setStatistics(response.data.articles);
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
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:underline">
                  {item.title}
                </a>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No recent activity to display</p>
          )}
        </div>
        <div className="bg-gray-900/50 rounded-lg p-4 border border-teal-900/30">
          <h2 className="text-xl font-semibold mb-3 text-teal-300">Statistics</h2>
          {statistics.length > 0 ? (
            statistics.map((item, index) => (
              <div key={index} className="mb-2">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:underline">
                  {item.title}
                </a>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No statistics available</p>
          )}
        </div>
      </div>
    </div>
  );
}
