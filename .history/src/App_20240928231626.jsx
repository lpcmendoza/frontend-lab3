import React, { useEffect, useState } from 'react';
import Story from './components/Story';
import sampleNews from './sample_news_stories.json';

const App = () => {
  const [stories, setStories] = useState([]);
  const [closedStories, setClosedStories] = useState([]);

  useEffect(() => {
    const fetchNews = () => {
      const shuffledStories = [...sampleNews.results].sort(() => 0.5 - Math.random());
      const randomStories = shuffledStories.slice(0, 5); // Display 5 random stories
      setStories(randomStories);
    };

    fetchNews();
  }, []);

  // Function to replace a closed story
  const replaceStory = (indexToReplace) => {
    // Get remaining stories that have not been displayed or closed
    const remainingStories = sampleNews.results.filter(
      (story) => !stories.includes(story) && !closedStories.includes(story)
    );

    if (remainingStories.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingStories.length);
      const newStory = remainingStories[randomIndex];

      const updatedStories = [...stories];
      updatedStories[indexToReplace] = newStory; // Replace the closed story
      setStories(updatedStories);

      // Add this story to the closedStories list to avoid showing it again
      setClosedStories([...closedStories, stories[indexToReplace]]);
    }
  };

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <div className="stories">
        {stories.map((story, index) => (
          <Story
            key={index}
            story={story}
            removeStory={() => replaceStory(index)} // Replace the story when closed
          />
        ))}
      </div>
    </div>
  );
};

export default App;
