import React from "react";
import Button from "./components/Automation/Button/Button.jsx"; // 버튼 컴포넌트 임포트

function App() {
  return (
    <div>
      <h1>버튼 컴포넌트 예제</h1>
      <Button text="클릭하세요" onClick={() => alert("버튼이 클릭됨!")} />
      <Button text="삭제" onClick={() => console.log("삭제 버튼 클릭!")} />
    </div>
  );
}

export default App;