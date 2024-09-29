function Story(props) {

    const { story } = props;

return (
      <div className="story">
        <img className="story_image" src={ReplaceImage()} alt={story.title} width="100" />
        <div className="story_header">
          <h1>
            <a href={story.link}>{story.title}</a>
          </h1>
        </div>
        <p className="story_creator"><strong>By: {story.creator}</strong></p>
        <p className="description">{ReplaceDescription()}</p>
      </div>
    );
  }