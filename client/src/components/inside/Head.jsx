// import { useState, useEffect, useRef } from 'react';
// import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { logout } from "../../redux/authSlice"; // ✅ Ensure correct pat
import Searchup from "./Searchup";

function Head({ isSearch }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const clickRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (clickRef.current && !clickRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center p-3 h-20 top-0 left-0 w-full border-gray-200  border-y fixed z-50 bg-white">
      <div className="logo-div flex items-center">
        <img
          src="/justlogo2.png"
          alt="logo"
          className="w-[90px] h-[90px] cursor-pointer"
          onClick={() => navigate("/dashboard")}
        />
      </div>
      {isSearch || <Searchup />}
      <div className="relative w-auto flex gap-2 items-center" ref={clickRef}>
        <button
          className="px-2 py-2 w-10 bg-white text-orange-500 rounded shadow-lg flex items-center justify-center sm:w-full md:justify-start"
          onClick={toggleDropdown}
        >
          <PersonIcon className="p-1" />
          <span className="hidden sm:inline ml-2">Account</span>
        </button>

        {isOpen && (
          <ul className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded w-32 sm:w-40 z-50">
            <li
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-sm"
              onClick={() => navigate("/Profile")}
            >
              <span>👤</span> {/* Icon only on very small screens */}
              <span>My Account</span>
            </li>
            <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-sm">
              <span>📦</span>
              <span>Order History</span>
            </li>
            <li
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-sm"
              onClick={() => dispatch(logout())}
            >
              <span>🚪</span>
              <span>Logout</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Head;
