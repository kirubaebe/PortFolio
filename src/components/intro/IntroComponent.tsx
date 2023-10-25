import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import WelcomeComponent from './WelcomeComponent';
import Description from './DescriptionComponent';
import '../../styles/Intro.css';

const IntroComponent = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const descriptionTimer = setTimeout(() => {
      setVisible(false);
    }, 32000);

    const introTimer = setTimeout(() => {
      setVisible(false);
      navigate('/home');
    }, 3000);

    return () => {
      clearTimeout(descriptionTimer);
      clearTimeout(introTimer);
    };
  }, [navigate]);

  return (
    <div className={`intro-container ${visible ? 'visible' : 'hidden'}`}>
      <ReactPlayer
        url={process.env.PUBLIC_URL + '/background.mp4'}
        playing={true}
        muted={false}
        volume={1}
        width="100%"
        height="100%"
      />
      <div className={`content ${visible ? 'description-visible' : 'description-hidden'}`}>
        {visible && <WelcomeComponent name="Recruiter" />}
        {visible && <Description />}
      </div>
    </div>
  );
};

export default IntroComponent;
