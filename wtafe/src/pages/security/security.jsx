import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../redux/slices/authSlice';
import './security.css';

const Security = () => {
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false); // 입력 필드 포커스 상태
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true); // 포커스 상태 활성화
  };

  const handleBlur = () => {
    setIsFocused(false); // 포커스 상태 비활성화
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/security', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        alert('비밀번호 인증 성공!');
        dispatch(auth());
        navigate('/home');
      } else {
        alert(`비밀번호 인증 실패: ${data.message || '다시 시도해주세요.'}`);
      }
    } catch (error) {
      console.error('네트워크 오류:', error);
      alert('네트워크 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="security-container">
      <div className={`bear-container ${isFocused ? 'focused' : ''}`}>
        <div className="bear">
          <div className="ears">
            <div className="ear left"></div>
            <div className="ear right"></div>
          </div>
          <div className="face">
            <div className="eyebrows"> {/* 눈썹 추가 */}
              <div className="eyebrow left"></div>
              <div className="eyebrow right"></div>
            </div>
            <div className="eyes">
              <div className="eye left"></div>
              <div className="eye right"></div>
            </div>
            <div className="nose"></div>
            <div className="mouth"></div>
          </div>
        </div>
      </div>
      <form className="security-form" onSubmit={handleSubmit}>
        <label htmlFor="password">접속 코드</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="접속 코드를 입력하세요."
          value={password}
          onChange={handleChange}
          onFocus={handleFocus} // 포커스 이벤트
          onBlur={handleBlur} // 블러 이벤트
          required
        />
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? '처리 중...' : '인증하기'}
        </button>
      </form>
    </div>
  );
};

export default Security;