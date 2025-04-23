import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/home/home";
import MainPage from "./pages/mainpage/mainpage";
import Security from "./pages/security/security";

function App() {
  return (
    <Router>
      <Routes>


        {/* 첫 페이지 - 보안코드 입력 시 서비스 접근 가능  */}
        <Route path="/" element={<Security />} />

        {/* 홈 페이지 - 자동화 환경 세팅 (서버, 인스턴스, 도메인 설정 페이지) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* 메인 페이지 - 자동화 환경 세팅 성공 시, 자동화 API 호출 가능함 */}
        <Route
          path="/mainpage"
          element={
            
              <MainPage />
          }
        />

      </Routes>
    </Router>
  );
}

export default App;