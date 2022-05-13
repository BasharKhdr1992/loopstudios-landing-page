import React from 'react';
import './CreationsCard.css';

const CreationsCard = ({ img, text }) => {
  const [text1, text2] = text.split('.');

  return (
    <div className="creations-card">
      <img src={img} alt={text} />
      <div className="overlay"></div>
      <p>
        {text1}
        <br />
        {text2}
      </p>
    </div>
  );
};

export default CreationsCard;
