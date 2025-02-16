import React from "react";

function Button({ children, onClick, className = "", variant = "primary", ...props }) {
  // Define styles for different button types
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition duration-300";
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    danger: "bg-red-600 text-white hover:bg-red-700",
    google:"border border-gray-500 text-blacke",
    apple:"border border-black bg-black text-white hover:bg-white hover:text-black"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
