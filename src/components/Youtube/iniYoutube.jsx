import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./../Youtube/iniYoutube.css";

const YouTubePlayer = ({ apiKey, videoId }) => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`
        );
        setVideoData(response.data);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideoData();
  }, [apiKey, videoId]);

  return (
    <div>
      {videoData ? (
        <div className='kontenVideo'>
          <p>{videoData.items[0].snippet.description}</p>
          <iframe
            title="YouTube Video Player"
            width="600"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default YouTubePlayer;
