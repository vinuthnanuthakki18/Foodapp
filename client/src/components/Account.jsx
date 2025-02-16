import React, { useState, useEffect } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Account({ isOpen, onClose }) {
    const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(isOpen);

  // Trigger the modal animation when it becomes visible
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // When modal closes, wait for the transition to finish before hiding
      setTimeout(() => setIsVisible(false), 300); // 300ms is the transition duration
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[300px] bg-gray-50 p-6 rounded-l-lg shadow-lg transform transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <button
        className="absolute top-2 right-2 text-xl"
        onClick={onClose}
      >
        ✖
      </button>
      <h2 className="text-2xl font-bold mb-4">You are not signed In</h2>
      <Button variant="primary" children="Signup / Login" onClick={()=>navigate("/signup")}/>
    </div>
  );
}

export default Account;
