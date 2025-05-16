import React from 'react';
import { useSelector } from 'react-redux'; 
import './mainpage.css';
import AutomationButton from '../../components/automationButton/automationButton';
import GoToHomeButton from '../../components/gotoHomeButton/gotoHomeButton';

const MainPage = () => {

  const { server, instance } = useSelector((state) => state.form);

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
      <GoToHomeButton />
      
      <h1>메인 페이지</h1>
      <p>아래 버튼을 눌러 API를 호출하세요.</p>


      <AutomationButton
        label="구성원 추가"
        apiEndpoint="http://127.0.0.1:8000/api/user/create"
        method="POST"
        requestBody = {
          {
            instance: instance,
            server : server
          }
        }
        onSuccess={handleSuccess}
        onError={handleError}
      />

      <AutomationButton
        label="구성원 수정"
        apiEndpoint="http://127.0.0.1:8000/api/user/modify"
        method="POST"
        requestBody = {
          {
            instance: instance,
            server : server
          }
        }
        onSuccess={handleSuccess}
        onError={handleError}
      />

      <AutomationButton
        label="구성원 조회"
        apiEndpoint="http://127.0.0.1:8000/api/user/retreive"
        method="POST"
        requestBody = {
          {
            instance: instance,
            server : server
          }
        }
        onSuccess={handleSuccess}
        onError={handleError}
      />


    </div>
  );
};

export default MainPage;