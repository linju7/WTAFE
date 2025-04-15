import React from 'react';
import './mainpage.css';
import GoToHomeButton from '../../components/gotoHomeButton/gotoHomeButton';

const MainPage = () => {
  return (
    <div className="mainpage-container">
      <GoToHomeButton />
      <h1>메인 페이지</h1>
      <p>로그인에 성공했습니다!</p>
    </div>
  );
};

export default MainPage;