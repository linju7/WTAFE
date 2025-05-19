import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './user.css';
import AutomationButton from '../../components/automationButton/automationButton';
import GoToHomeButton from '../../components/gotoHomeButton/gotoHomeButton';

const UserPage = () => {
  const { server, instance } = useSelector((state) => state.form);
  const [currentStep, setCurrentStep] = useState(0); // 현재 단계 상태 (0: 추가, 1: 수정, 2: 조회, 3: 삭제)
  const [isLoading, setIsLoading] = useState(false); // 진행 중 상태

  const handleSuccess = (data) => {
    console.log('API 호출 성공:', data);
    alert(data.message || 'API 호출 성공!');
    setCurrentStep((prevStep) => prevStep + 1);
    setIsLoading(false); // 진행 상태 종료
  };

  const handleError = (error) => {
    console.error('API 호출 실패:', error);
    alert(error.message || 'API 호출 실패!');
    setIsLoading(false); // 진행 상태 종료
  };

  const handleRestart = () => {
    setCurrentStep(0); // 단계 초기화
    setIsLoading(false); // 진행 상태 종료
  };

  const handleAutoSuccess = (data) => {
    console.log('자동 진행 API 호출 성공:', data);
    alert(data.message || '모든 작업이 완료되었습니다!');
    setCurrentStep(4); // 자동 진행 완료 후 currentStep을 4로 설정
    setIsLoading(false); // 진행 상태 종료
  };

  const handleAutoStart = () => {
    setIsLoading(true); // 진행 상태 시작
  };

  return (
    <div className="user-container">
      <GoToHomeButton />
      <h1>구성원 기본기능 테스트</h1>
      <p>아래 버튼을 눌러 순차적으로 작업을 진행하세요.</p>

      {/* 프로그레스바 */}
      {isLoading && (
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${(currentStep / 4) * 100}%` }}></div>
        </div>
      )}

      {/* 자동 진행 버튼 */}
      {currentStep === 0 && (
        <div className="button-group">
          <AutomationButton
            label="자동으로 진행하기"
            apiEndpoint="http://127.0.0.1:8000/api/user/all"
            method="POST"
            requestBody={{
              instance: instance,
              server: server,
            }}
            onSuccess={handleAutoSuccess}
            onError={handleError}
            onClick={handleAutoStart}
          />
        </div>
      )}

      {/* 단계별 버튼 */}
      <div className="button-group">
        {currentStep === 0 && (
          <AutomationButton
            label="구성원 추가"
            apiEndpoint="http://127.0.0.1:8000/api/user/create"
            method="POST"
            requestBody={{
              instance: instance,
              server: server,
            }}
            onSuccess={handleSuccess}
            onError={handleError}
          />
        )}

        {currentStep === 1 && (
          <AutomationButton
            label="구성원 수정"
            apiEndpoint="http://127.0.0.1:8000/api/user/modify"
            method="POST"
            requestBody={{
              instance: instance,
              server: server,
            }}
            onSuccess={handleSuccess}
            onError={handleError}
          />
        )}

        {currentStep === 2 && (
          <AutomationButton
            label="구성원 조회"
            apiEndpoint="http://127.0.0.1:8000/api/user/retreive"
            method="POST"
            requestBody={{
              instance: instance,
              server: server,
            }}
            onSuccess={handleSuccess}
            onError={handleError}
          />
        )}

        {currentStep === 3 && (
          <AutomationButton
            label="구성원 삭제"
            apiEndpoint="http://127.0.0.1:8000/api/user/delete"
            method="POST"
            requestBody={{
              instance: instance,
              server: server,
            }}
            onSuccess={handleSuccess}
            onError={handleError}
          />
        )}
      </div>

      {/* 다시 하기 버튼 */}
      {currentStep > 3 && (
        <button className="restart-button" onClick={handleRestart}>
          다시 하기
        </button>
      )}
    </div>
  );
};

export default UserPage;