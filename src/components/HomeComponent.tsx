import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/Home.css'
function HomeComponent() {
  return (
    <div>
      <div className="video-container">
        <ReactPlayer
          url={process.env.PUBLIC_URL + '/mine1.mp4'}
          playing={true}
          muted={false}
          volume={1}
          width="100%"
          height="100%"
        />
      </div>
    </div>);
}

export default HomeComponent;
