import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import MainPage from "./pages/mainpage/mainpage";
import Security from "./pages/security/security";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Security />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;