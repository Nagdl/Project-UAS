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
    <div className='containerYoutube'>
      {videoData ? (
        <div className='kontenVideo'>
          <div className='videoYoutube'>
            <iframe className='video'
              title="YouTube Video Player"
              width="600"
              height="400"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
            <div className='DeskripsiYoutube'>
              <p className='teksVideo'>{videoData.items[0].snippet.description}</p>
            </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default YouTubePlayer;
