import React from 'react';
import YouTubePlayer from './iniYoutube';

const DYoutube = () => {
  const apiKey = 'AIzaSyC7cJKkm6JcVV0Dpx2RjZaqYh5Ch-UjQ7g';
  const videoId = 'EiNJc4KKwXg';

  return (
    <div>
      <YouTubePlayer apiKey={apiKey} videoId={videoId} />
    </div>
  );
};

export default DYoutube;
