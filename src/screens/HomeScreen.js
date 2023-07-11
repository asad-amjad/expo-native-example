import React, { useState } from 'react';
import './Cards.css';

const Cards = () => {
  const data = [
    {
      id: 1,
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];

  const [zoomedCard, setZoomedCard] = useState(null);

  const handleCardHover = (id) => {
    setZoomedCard(id);
  };

  const handleCardLeave = () => {
    setZoomedCard(null);
  };

  return (
    <div className="container">
      {data.map((item) => (
        <div
          key={item.id}
          className={`card ${zoomedCard === item.id ? 'zoomed' : ''}`}
          onMouseEnter={() => handleCardHover(item.id)}
          onMouseLeave={handleCardLeave}
        >
          <h2 className="cardTitle">{item.title}</h2>
          <p className="cardDescription">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
