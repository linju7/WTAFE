import React, { useEffect, useRef } from 'react';
import './Dropdown.css';

const Dropdown = ({ label, options, selectedValue, onSelect, isOpen, onToggle }) => {
  const dropdownRef = useRef(null);

  // 드롭다운 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(); // 드롭다운 닫기
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <>
      {/* 배경 어두워짐 효과 */}
      {isOpen && <div className="dropdown-backdrop" onClick={onToggle}></div>}
      <div className="dropdown" ref={dropdownRef}>
        <label>{label}</label>
        <div
          className="dropdown-header"
          onClick={onToggle}
        >
          {selectedValue || `${label}`}
        </div>
        <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
          {options.map((option) => (
            <li key={option} onClick={() => onSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;