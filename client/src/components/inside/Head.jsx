import { useState, useEffect, useRef } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

function Head() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center p-4 h-20  border-gray-200  border-y ">
            <div className="logo-div flex items-center">
                <img src="/justlogo2.png" alt="logo" className="w-[90px] h-[80px] cursor-pointer" onClick={()=>navigate("/dashboard")}/>
                <h3 className="text-[30px] font-bold text-orange-500 cursor-pointer" onClick={()=>navigate("/dashboard")}>biteXpress</h3>
            </div>
            <div className="relative flex gap-4 items-center">
                <button className="px-4 py-2 bg-white text-orange-500 rounded  shadow-lg">
                    <PersonIcon className="p-1"/>Account
                </button>
            </div>
        </div>
    );
}

export default Head;