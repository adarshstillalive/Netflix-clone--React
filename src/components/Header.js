import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { LOGO_URL } from '../utils/constant';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate()
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      console.log(error);
      
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="flex items-center px-4 py-4 md:px-8 md:py-6">
        <img
          src={LOGO_URL}
          alt="Netflix"
          className="h-5 md:h-10"
        />
        <nav className="hidden md:flex ml-8 space-x-4">
          {['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'].map((item) => (
            <h4 key={item} className="text-sm cursor-pointer text-white hover:text-gray-300 transition duration-200">
              {item}
            </h4>
          ))}
        </nav>
        <div className="flex-grow" />
        <div className="flex items-center space-x-4 text-white">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/45/45587.png" 
            alt="Search" 
            className="h-6 w-6 cursor-pointer hover:opacity-80 transition duration-200"
          />
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1827/1827372.png" 
            alt="Notifications" 
            className="h-6 w-6 cursor-pointer hover:opacity-80 transition duration-200"
          />
          <div className="relative">
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="User Profile"
                className="rounded h-8 w-8"
              />
              <img 
                src="https://cdn-icons-png.flaticon.com/512/71/71770.png" 
                alt="Dropdown" 
                className={`h-4 w-4 transition duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded shadow-lg py-1">
                <h4 className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">Account</h4>
                <h4 className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">Help Center</h4>
                <button onClick={handleSignOut} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">Sign out of Netflix</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;