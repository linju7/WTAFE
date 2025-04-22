import React from 'react';
import './Dropdown.css';

const Dropdown = ({ label, options, selectedValue, onSelect, isOpen, onToggle }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <div className="dropdown-header" onClick={onToggle}>
        {selectedValue || `${label}을(를) 선택하세요`}
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option} onClick={() => onSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;