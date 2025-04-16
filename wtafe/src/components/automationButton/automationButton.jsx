import React from 'react';
import PropTypes from 'prop-types';
import './automationButton.css';

const AutomationButton = ({ label, apiEndpoint, method = 'GET', body = null, headers = {}, onSuccess, onError }) => {
  const handleClick = async () => {
    try {
      const response = await fetch(apiEndpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : null,
      });

      if (response.ok) {
        const data = await response.json();
        if (onSuccess) onSuccess(data);
      } else {
        const errorData = await response.json();
        if (onError) onError(errorData);
        else alert(`API 호출 실패: ${errorData.message || '알 수 없는 오류'}`);
      }
    } catch (error) {
      console.error('네트워크 오류:', error);
      if (onError) onError(error);
      else alert('네트워크 오류가 발생했습니다.');
    }
  };

  return (
    <button className="automation-button" onClick={handleClick}>
      {label}
    </button>
  );
};

AutomationButton.propTypes = {
  label: PropTypes.string.isRequired, // 버튼에 표시될 텍스트
  apiEndpoint: PropTypes.string.isRequired, // 호출할 API 엔드포인트
  method: PropTypes.string, // HTTP 메서드 (기본값: 'GET')
  body: PropTypes.object, // 요청 본문 (POST, PUT 등에서 사용)
  headers: PropTypes.object, // 추가 HTTP 헤더
  onSuccess: PropTypes.func, // 성공 시 호출될 콜백 함수
  onError: PropTypes.func, // 실패 시 호출될 콜백 함수
};

export default AutomationButton;