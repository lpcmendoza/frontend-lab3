import news_feed from './sample_news_stories.json';

function App() {
  const stories = news_feed.results;

  return (
    <div className="App">
      {stories.length > 0 ? (
        stories.map((story, index) => (
          <Story
            key={index}
            title={story.title}
            link={story.link}
            description={story.description}
            pubDate={story.pubDate}
          />
        ))
      ) : (
        <p>No stories available.</p>
      )}
    </div>
  );
}

