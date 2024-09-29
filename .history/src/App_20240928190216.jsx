import news_feed from './sample_news_stories.json';

function App() {
  const stories = news_feed.results;

  return (
    <>
    <div className="App">
      {stories.map((story, index) => (
        <Story
          key={index}
          title={story.title}
          link={story.link}
          description={story.description}
          pubDate={story.pubDate}
        />
      ))}
    </div>
    </>
  );
}

export default App;
