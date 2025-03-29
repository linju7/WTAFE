import React from "react";
import PropTypes from "prop-types";
import "./Button.module.css"; // 스타일 적용 (선택)

const Button = ({ text, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired, // 버튼에 들어갈 텍스트 (필수)
  onClick: PropTypes.func, // 클릭 이벤트 핸들러 (선택)
};

Button.defaultProps = {
  text: "버튼",
  onClick: () => console.log("버튼 클릭됨"),
};

export default Button;