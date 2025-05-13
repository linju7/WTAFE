import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../redux/slices/authSlice';
import './security.css';

const Security = () => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPassword(e.target.value);
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
      <form className="security-form" onSubmit={handleSubmit}>
        <label htmlFor="password">접속 코드</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="접속 코드를 입력하세요."
          value={password}
          onChange={handleChange}
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