import React from 'react';
import { useNavigate } from 'react-router-dom';
import './mainpage.css';

const MainPage = () => {
  const navigate = useNavigate();

  const goToUserPage = () => {
    navigate('/user');
  };

  return (
    <div className="mainpage-container">
      <h1>메인 페이지</h1>
      <button className="mainpage-button" onClick={goToUserPage}>
        구성원
      </button>
    </div>
  );
};

export default MainPage;