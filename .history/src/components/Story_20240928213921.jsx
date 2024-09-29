import news_feed from './sample_news_stories.json';

function Story({ title, link, description, pubDate }) {
    return (
      <div className="story">
        <h2>{title}</h2>
        <p>{description}</p>
        <p><strong>Published on:</strong> {pubDate}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    );
  }
  