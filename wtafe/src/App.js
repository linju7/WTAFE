import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/home/home";
import MainPage from "./pages/mainpage/mainpage";
import UserPage from "./pages/user/user";

function App() {
  return (
    <Router>
      <Routes>


        {/* 첫 페이지 - 보안코드 입력 시 서비스 접근 가능  */}
        <Route path="/" element={<Home />} />

        {/* 홈 페이지 - 자동화 환경 세팅 (서버, 인스턴스, 도메인 설정 페이지) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* 메인 페이지 - 어떤 동작을 수행할지 고르는 페이지 */}
        <Route
          path="/mainpage"
          element={
            
              <MainPage />
          }
        />

        <Route
          path="/user"
          element={
            
              <UserPage />
          }
        />

      </Routes>
    </Router>
  );
}

export default App;