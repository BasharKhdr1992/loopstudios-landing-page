import React from 'react';
import './Main.css';
import Intro from './Intro';
import Creations from './Creations';
import CreationsGrid from './CreationsGrid/CreationsGrid';

const Main = () => {
  return (
    <main className="main-section">
      <Intro />
      <Creations />
      <CreationsGrid />
      <div className="btn-container mobile">
        <button className="btn btn-primary mobile">See all</button>
      </div>
    </main>
  );
};

export default Main;
