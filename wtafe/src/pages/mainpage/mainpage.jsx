import React from 'react';
import './mainpage.css';
import AutomationButton from '../../components/automationButton/automationButton';

const MainPage = () => {
  const handleSuccess = (data) => {
    console.log('API 호출 성공:', data);
    alert(data.message || 'API 호출 성공!');
  };

  const handleError = (error) => {
    console.error('API 호출 실패:', error);
    alert('API 호출 실패!');
  };

  return (
    <div className="mainpage-container">
      <h1>메인 페이지</h1>
      <p>아래 버튼을 눌러 API를 호출하세요.</p>
      <AutomationButton
        label="API 호출"
        apiEndpoint="http://127.0.0.1:8000/api/example"
        method="GET"
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>
  );
};

export default MainPage;