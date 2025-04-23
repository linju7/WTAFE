import React from 'react';
import { useNavigate } from 'react-router-dom';
import './gotoHomeButton.css';

const GoToHomeButton = () => {
  const navigate = useNavigate();

  const handleGoHome = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.status === 'success') {
        alert('로그아웃 성공!');
        setTimeout(() => navigate('/'), 500); // 애니메이션 후 이동
      } else {
        alert(`로그아웃 실패: ${data.message || '다시 시도해주세요.'}`);
      }
    } catch (error) {
      console.error('네트워크 오류:', error);
      alert('네트워크 오류가 발생했습니다.');
    }
  };

  return (
    <button className="goto-home-button" onClick={handleGoHome}>
      홈으로
    </button>
  );
};

export default GoToHomeButton;