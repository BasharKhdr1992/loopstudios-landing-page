import React from 'react';
import introImageDesktop from '../../images/desktop/image-interactive.jpg';
import introImageMobile from '../../images/mobile/image-interactive.jpg';
import { useWindowSize } from '../../custom-hooks/useWindowSize';
import './Intro.css';

const Intro = () => {
  const [width] = useWindowSize();
  const introImage = width < 1000 ? introImageMobile : introImageDesktop;

  return (
    <div className="intro">
      <div className="intro-img-container">
        <img
          src={introImage}
          className="intro-img"
          alt="The leader in interactive VR"
        />
      </div>
      <div className="intro-text">
        <p className="intro-header">
          The leader in
          <br />
          interactive VR
        </p>
        <p className="intro-para">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default Intro;
