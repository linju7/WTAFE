import React from "react";
import Button from "./components/Button/Button";
import { handleApiCall } from "./api/automation/apiHandler";

function App() {
  return (
    <div>
      <h1>API 호출 버튼 예시</h1>
      <Button text="내부그룹추가" onClick={() => handleApiCall("내부그룹추가")} />
    </div>
  );
}

export default App;