import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();

  const goToAnalysis = () => {
    navigate('/analysis');
  };

  const goToBroadCasting = () => {
    navigate('/broadcasting');
  };

  return (
    <div id="wrap">
      <div className="mainContent">
        <div className="leftContent">
          <div className="videoBox"></div>
        </div>
        <div className="rightContent">
          <div className="logo">익명성</div>
          <div className="btnArea">
            <button className="analysis" onClick={goToAnalysis}>Analysis</button>
            <button className="broadcasting" onClick={goToBroadCasting}>Broadcasting</button>
          </div>
          <div className="search">
            <input type="text" placeholder='Search...' />
          </div>
        </div>
      </div>
      <div className="information">

      </div>
      
    </div>
  );
};

export default Homepage;
