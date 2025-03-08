import { useState, useEffect, useRef } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import Account from './Account';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            // console.log(event);
            // console.log(dropdownRef);
            // console.log(dropdownRef.current.contains(event.target));
            // console.log(dropdownRef.current);
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex justify-between items-center p-4 h-20">
            <div className="logo-div flex items-center">
                <img src="/justlogo2.png" alt="logo" className="w-[90px] h-[80px] cursor-pointer" onClick={()=>navigate("/")}/>
                <h3 className="text-[40px] text-orange-500 font-bold cursor-pointer" onClick={()=>navigate("/")}>biteXpress</h3>
            </div>
            <div className="relative flex gap-4 items-center">
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={toggleDropdown}
                        className="px-4 py-2 bg-white text-orange-500 rounded shadow-lg"
                    >
                        Partner with Us
                    </button>

                    {/* Dropdown */}
                    {isOpen && (
                        <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded w-48 z-50">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Rider</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Partners</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Users</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Food to Work</li>
                        </ul>
                    )}
                </div>
                <button className="px-4 py-2 bg-white text-orange-500 rounded shadow-lg" onClick={()=>navigate("/signup")}>
                    <HomeIcon className="p-1"/>SignUp or Login
                </button>
                
                <button className="px-4 py-2 bg-white text-orange-500 rounded  shadow-lg" onClick={() => setIsModalOpen(true)}>
                    <PersonIcon className="p-1"/>Account
                </button>
                <Account isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </div>
    );
}

export default Header;
