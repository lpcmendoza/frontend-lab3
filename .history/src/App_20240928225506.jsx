import React, { useEffect, useState } from 'react';
import Story from './components/Story';
import sampleNews from './sample_news_stories.json'; 

const App = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchNews = () => {
      const shuffledStories = [...sampleNews.results].sort(() => 0.5 - Math.random());
      const randomStories = shuffledStories.slice(0, 5); // Display 5 random stories
      setStories(randomStories);
    };

    fetchNews();
  }, []);

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <div className="stories">
        {stories.map((story, index) => (
          <Story key={index} story={story} />
        ))}
      </div>
    </div>
  );
};

export default App;
