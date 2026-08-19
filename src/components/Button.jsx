import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-lg text-white bg- bg-[#263F79] hover:bg-[#263F79]/90 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;