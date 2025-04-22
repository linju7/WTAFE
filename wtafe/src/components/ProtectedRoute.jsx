import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated); // 안전한 참조

  if (!isAuthenticated) {
    // 인증되지 않은 경우 보안 페이지로 리다이렉트
    return <Navigate to="/" replace />;
  }

  return children; // 인증된 경우 자식 컴포넌트를 렌더링
};

export default ProtectedRoute;