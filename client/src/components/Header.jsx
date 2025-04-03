import { useState, useEffect, useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Account from "./Account";
// import "./Header.css";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null); // Ref for hamburger menu
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 h-auto w-full md:h-20 md:px-8">
      {/* Logo Section */}
      <div className="logo-div flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center gap-2">
          <img
            src="/justlogo2.png"
            alt="logo"
            className="w-12 h-12 md:w-20 md:h-20 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <h3
            className="text-3xl md:text-4xl text-outline text-orange-500 font-extrabold cursor-pointer"
            onClick={() => navigate("/")}
          >
            biteXpress
          </h3>
        </div>
        <div className="relative" ref={menuRef}>
          <button
            className="md:hidden text-orange-500 focus:outline-none"
            onClick={toggleMenu}
          >
            <MenuIcon className="w-8 h-8" />
          </button>
          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-100 shadow-lg rounded z-50 md:hidden">
              <div className="flex flex-col gap-2 p-2">
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="px-4 py-2 text-sm bg-white text-orange-500 rounded shadow-lg hover:bg-orange-100 w-full text-left"
                  >
                    Partner with Us
                  </button>
                  {isOpen && (
                    <ul className="mt-2 bg-white shadow-lg rounded w-full z-50">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Rider
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Partners
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Users
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Food to Work
                      </li>
                    </ul>
                  )}
                </div>
                <button
                  className="px-3 py-1.5 text-sm bg-white text-orange-500 rounded shadow-lg hover:bg-orange-100 flex items-center gap-1 w-full"
                  onClick={() => navigate("/signup")}
                >
                  <HomeIcon className="w-5 h-5" /> SignUp or Login
                </button>
                <button
                  className="px-3 py-1.5 text-sm bg-white text-orange-500 rounded shadow-lg hover:bg-orange-100 flex items-center gap-1 w-full"
                  onClick={() => setIsModalOpen(true)}
                >
                  <PersonIcon className="w-5 h-5" /> Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row gap-2 items-center w-auto mt-0">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="px-4 py-2 text-sm bg-white text-orange-500 rounded shadow-lg hover:bg-orange-100 w-auto"
          >
            Partner with Us
          </button>
          {isOpen && (
            <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded w-48 z-50">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Rider
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Partners
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Users
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Food to Work
              </li>
            </ul>
          )}
        </div>
        <button
          className="px-3 py-1.5 text-sm bg-white text-orange-500 rounded shadow-lg hover:bg-orange-100 flex items-center gap-1 w-auto"
          onClick={() => navigate("/signup")}
        >
          <HomeIcon className="w-5 h-5" /> SignUp or Login
        </button>
        <button
          className="px-3 py-1.5 text-sm bg-white text-orange-500 rounded shadow-lg hover:bg-orange-100 flex items-center gap-1 w-auto"
          onClick={() => setIsModalOpen(true)}
        >
          <PersonIcon className="w-5 h-5" /> Account
        </button>
      </div>

      {/* Account Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="relative w-full max-w-md p-4">
            <Account
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
