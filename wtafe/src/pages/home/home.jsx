import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    domain: '',
    server: '',
    instance: '',
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    server: false,
    instance: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDropdownSelect = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setDropdownOpen((prev) => ({ ...prev, [name]: false }));
  };

  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => {
      const newState = { server: false, instance: false }; // 모든 드롭다운 닫기
      newState[name] = !prev[name]; // 클릭한 드롭다운만 토글
      return newState;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('API 요청 데이터:', formData);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.status === 'success') {
        console.log('응답 데이터:', data);
        navigate('/mainpage'); // 로그인 성공 시 mainpage로 이동
      } else {
        console.error('로그인 실패:', data.message || '알 수 없는 오류');
        alert(`로그인 실패: ${data.message || '다시 시도해주세요.'}`);
      }
    } catch (error) {
      console.error('네트워크 오류:', error);
      alert('네트워크 오류가 발생했습니다.');
    }
  };

  return (
    <div className="home-container">
      <form className="input-form" onSubmit={handleSubmit}>
        <label htmlFor="domain">도메인 입력</label>
        <input
          type="text"
          id="domain"
          name="domain"
          maxLength="100"
          placeholder="예시) @domain.com"
          value={formData.domain}
          onChange={handleChange}
        />

        <label>서버 선택</label>
        <div className="dropdown">
          <div
            className="dropdown-header"
            onClick={() => toggleDropdown('server')}
          >
            {formData.server || '서버를 선택하세요'}
          </div>
          {dropdownOpen.server && (
            <ul className="dropdown-menu">
              {['alpha', 'stage', 'real'].map((server) => (
                <li
                  key={server}
                  onClick={() => handleDropdownSelect('server', server)}
                >
                  {server}
                </li>
              ))}
            </ul>
          )}
        </div>

        <label>인스턴스 선택</label>
        <div className="dropdown">
          <div
            className="dropdown-header"
            onClick={() => toggleDropdown('instance')}
          >
            {formData.instance || '인스턴스를 선택하세요'}
          </div>
          {dropdownOpen.instance && (
            <ul className="dropdown-menu">
              {['kr1', 'jp1', 'jp2', 'gov'].map((instance) => (
                <li
                  key={instance}
                  onClick={() => handleDropdownSelect('instance', instance)}
                >
                  {instance}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit" className="submit-button">Start</button>
      </form>
    </div>
  );
};

export default Home;