// src/components/Story.jsx
import React from 'react';

const Story = ({ title, link, description }) => {
  return (
    <div className="story">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default Story;
