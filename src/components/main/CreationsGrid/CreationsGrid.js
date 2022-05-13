import React from 'react';
import './CreationsGrid.css';
import CreationsCard from './CreationsCard';
import cardImages from './Images';
import { useWindowSize } from '../../../custom-hooks/useWindowSize';

const CreationsGrid = () => {
  const [width] = useWindowSize();

  const {
    deepEarth,
    nightArcade,
    soccerTeam,
    grid,
    fromAbove,
    pocketBorealis,
    fishEye,
    curiosity,
  } = width < 900 ? cardImages.mobile : cardImages.desktop;

  return (
    <div className="grid">
      <CreationsCard img={deepEarth} text={`deep.earth`} />
      <CreationsCard img={nightArcade} text={`night.arcade`} />
      <CreationsCard img={soccerTeam} text={`soccer.team vr`} />
      <CreationsCard img={grid} text={`the.grid`} />
      <CreationsCard img={fromAbove} text={`from up.above vr`} />
      <CreationsCard img={pocketBorealis} text={`pocket.borealis`} />
      <CreationsCard img={fishEye} text={`make it.fisheye`} />
      <CreationsCard img={curiosity} text={`the.curiosity`} />
    </div>
  );
};

export default CreationsGrid;
