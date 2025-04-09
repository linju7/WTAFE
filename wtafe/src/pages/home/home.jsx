import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <form className="login-form">
        <label htmlFor="username">아이디</label>
        <input type="text" id="username" name="username" placeholder="아이디를 입력하세요" />
        
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" />
        
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Home;