import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import '../../css/BroadCasting.css';

const BroadCasting = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedVideos = JSON.parse(localStorage.getItem('broadcastingVideos')) || [];
    setVideos(savedVideos);
  }, []);

  const handleAddVideo = () => {
    navigate('/broadcasting/makevideo');
  };

  return (
    <div>
      <Sidebar />
      <div className='broadcastingBody'>
        <div className="contentHeader">
          <h1>Broadcasting</h1>
          <button onClick={handleAddVideo} className="addVideoButton">
            Add Broadcast
          </button>
        </div>

        <div className="videoList">
          {videos.map((video) => (
            <div key={video.id} className="videoContent" onClick={() => navigate(`/videoviewer/broadcasting/${video.id}`)}> 
              <div className="thumbnail">
                <img src={video.thumbnail} alt={`${video.title} thumbnail`} />
              </div>
              <div className="videoInfo">
                <h3>{video.title}</h3>
                <p>ID: {video.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BroadCasting;