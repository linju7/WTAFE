import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import useFormHandler from '../../hooks/useFormHandler';
import Dropdown from '../../components/homeDropdown/Dropdown';

const Home = () => {
  const navigate = useNavigate();
  const {
    formData,
    dropdownOpen,
    handleDropdownSelect,
    toggleDropdown,
    handleSubmit,
  } = useFormHandler(navigate);

  return (
    <div className="home-container">
      <form className="input-form" onSubmit={handleSubmit}>
        <Dropdown
          label="도메인 선택"
          options={['kr1-prm0825.by-works.com', 'jp2-adv01.wdomain3.com']}
          selectedValue={formData.domain}
          isOpen={dropdownOpen.domain}
          onToggle={() => toggleDropdown('domain')}
          onSelect={(value) => handleDropdownSelect('domain', value)}
        />

        <Dropdown
          label="서버 선택"
          options={['alpha', 'stage', 'real']}
          selectedValue={formData.server}
          isOpen={dropdownOpen.server}
          onToggle={() => toggleDropdown('server')}
          onSelect={(value) => handleDropdownSelect('server', value)}
        />

        <Dropdown
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