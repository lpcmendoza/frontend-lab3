import React from 'react';

const Story = ({ story, removeStory }) => {
  const getImage = () => {
    return story.image_url ? story.image_url : 'https://via.placeholder.com/100';
  };

  const getDescription = () => {
    return story.description ? story.description : 'No description available.';
  };

  return (
    <div className="story">
      <button className="close-button" onClick={removeStory}>X</button> {}
      <img className="story_image" src={getImage()} alt={story.title} width="100" />
      <div className="story_header">
        <h1>
          <a href={story.link} target="_blank" rel="noopener noreferrer">
            {story.title}
          </a>
        </h1>
      </div>
      <p className="story_creator">
        <strong>By: {story.creator && story.creator.length > 0 ? story.creator.join(', ') : 'Unknown'}</strong>
      </p>
      <p className="description">{getDescription()}</p>
    </div>
  );
};

export default Story;
