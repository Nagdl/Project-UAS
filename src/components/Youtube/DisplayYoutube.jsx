import React from 'react';
import YouTubePlayer from './iniYoutube';
import "./../Youtube/DisplayYoutube.css";

const DYoutube = () => {
  const apiKey = 'AIzaSyC7cJKkm6JcVV0Dpx2RjZaqYh5Ch-UjQ7g';
  const videoId = 'EiNJc4KKwXg';

  return (
    <div className="containerVideo">
      <YouTubePlayer apiKey={apiKey} videoId={videoId} />
    </div>
  );
}

export default DYoutube;
