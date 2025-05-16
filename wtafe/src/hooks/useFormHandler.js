import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setServer, setInstance } from '../redux/slices/formSlice';

const useFormHandler = (navigate) => {
  const [formData, setFormData] = useState({
    domain: '@kr1-prm0825.by-works.com', // 디폴트 값
    server: 'real', // 디폴트 값
    instance: 'kr1', // 디폴트 값
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    domain: false,
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

  const handleDropdownSelect = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setDropdownOpen((prev) => ({ ...prev, [field]: false }));

    if (field === 'server') {
      dispatch(setServer(value));
    } else if (field === 'instance') {
      dispatch(setInstance(value));
    }
  };

  const toggleDropdown = (field) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // formData 값 검증 및 초기값 보장
    const validatedFormData = {
      domain: formData.domain || '@kr1-prm0825.by-works.com',
      server: formData.server || 'real',
      instance: formData.instance || 'kr1',
    };

    console.log('Validated Form Data:', validatedFormData); // 디버깅용 로그

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedFormData), // JSON 직렬화
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