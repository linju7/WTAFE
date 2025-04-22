import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import HomeDropdown from '../../components/homeComponents/homeDropdown';
import HomeFormHandler from '../../components/homeComponents/homeFormHandler';

const Home = () => {
  const navigate = useNavigate();
  const {
    formData,
    dropdownOpen,
    handleChange,
    handleDropdownSelect,
    toggleDropdown,
    handleSubmit,
  } = HomeFormHandler(navigate);

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

        <HomeDropdown
          label="서버 선택"
          options={['alpha', 'stage', 'real']}
          selectedValue={formData.server}
          isOpen={dropdownOpen.server}
          onToggle={() => toggleDropdown('server')}
          onSelect={(value) => handleDropdownSelect('server', value)}
        />

        <HomeDropdown
          label="인스턴스 선택"
          options={['kr1', 'jp1', 'jp2', 'gov']}
          selectedValue={formData.instance}
          isOpen={dropdownOpen.instance}
          onToggle={() => toggleDropdown('instance')}
          onSelect={(value) => handleDropdownSelect('instance', value)}
        />

        <button type="submit" className="submit-button">Start</button>
      </form>
    </div>
  );
};

export default Home;