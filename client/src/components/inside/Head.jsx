// import { useState, useEffect, useRef } from 'react';
// import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { logout } from "../../redux/authSlice"; // ✅ Ensure correct path


function Head() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isOpen , setIsOpen] = useState(false);
    const clickRef = useRef(null);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(()=>{
        function handleClickOutside(event){
            if(clickRef.current && !clickRef.current.contains(event.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown",handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    },[]);

    return (
        <div className="flex justify-between items-center p-4 h-20  border-gray-200  border-y ">
            <div className="logo-div flex items-center">
                <img src="/justlogo2.png" alt="logo" className="w-[90px] h-[80px] cursor-pointer" onClick={()=>navigate("/dashboard")}/>
                <h3 className="text-[30px] font-bold text-orange-500 cursor-pointer" onClick={()=>navigate("/dashboard")}>biteXpress</h3>
            </div>
            <div className="relative flex gap-4 items-center"  ref={clickRef}>
                <button className="px-4 py-2 bg-white text-orange-500 rounded  shadow-lg" onClick={toggleDropdown}>
                    <PersonIcon className="p-1"/>Account
                </button>
                {isOpen && (
                    <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded w-40 z-50">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=> navigate('/Profile')}>My Account</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Order History</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=> dispatch(logout())}>Logout</li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Head;