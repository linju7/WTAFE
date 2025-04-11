import React, { useState } from 'react';
import './home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    inputText: '',
    server: '',
    instance: '',
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    server: false,
    instance: false,
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('API 요청 데이터:', formData);
  };

  return (
    <div className="home-container">
      <form className="input-form" onSubmit={handleSubmit}>
        <label htmlFor="inputText">도메인 입력</label>
        <input
          type="text"
          id="inputText"
          name="inputText"
          maxLength="100"
          placeholder="예시) @domain.com"
          value={formData.inputText}
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
              {['Alpha', 'Stage', 'Real'].map((server) => (
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
              {['KR1', 'JP1', 'JP2', 'GOV'].map((instance) => (
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