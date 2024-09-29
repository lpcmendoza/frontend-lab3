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

  // Function to remove a story by filtering it out of the stories array
  const removeStory = (indexToRemove) => {
    const updatedStories = stories.filter((story, index) => index !== indexToRemove);
    setStories(updatedStories);
  };

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <div className="stories">
        {stories.map((story, index) => (
          <Story
            key={index}
            story={story}
            removeStory={() => removeStory(index)} // Pass the remove function with the index
          />
        ))}
      </div>
    </div>
  );
};

export default App;
