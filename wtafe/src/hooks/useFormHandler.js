import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setServer, setInstance } from '../redux/slices/formSlice';

const useFormHandler = (navigate) => {
  const [formData, setFormData] = useState({
    domain: '',
    server: '',
    instance: '',
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    server: false,
    instance: false,
  });

  const dispatch = useDispatch();

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

    if (name === 'server') {
      dispatch(setServer(value));
    } else if (name === 'instance') {
      dispatch(setInstance(value));
    }
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
        navigate('/mainpage');
      } else {
        console.error('로그인 실패:', data.message || '알 수 없는 오류');
        alert(`로그인 실패: ${data.message || '다시 시도해주세요.'}`);
      }
    } catch (error) {
      console.error('네트워크 오류:', error);
      alert('네트워크 오류가 발생했습니다.');
    }
  };

  return {
    formData,
    dropdownOpen,
    handleChange,
    handleDropdownSelect,
    toggleDropdown,
    handleSubmit,
  };
};

export default useFormHandler;