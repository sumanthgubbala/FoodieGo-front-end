import { AuthenticationHook } from './ContextAuthentication';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const ProfileMenu = () => {
  const { isLoggedIn, setIsLoggedIn,username ,logout} = AuthenticationHook();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const containerRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
  const handleAuth = () => {
    if (isLoggedIn) {
      logout();
      setIsLoggedIn(false);
      sessionStorage.removeItem('isLoggedIn');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('userId');
      
      navigate('/');
    } else {
      navigate('/login');
    }
    setOpen(false);
  };

  return (
    isLoggedIn && (
      <div className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center gap-2 bg-white border border-orange-300 rounded-md px-4 py-2 text-sm text-gray-700"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            alt="username"
            className="h-8 w-8 rounded-full"
          />
          <span>{username}</span>
          <svg
            className={`h-4 w-4 transform transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="text-sm font-semibold">{username}</p>
            </div>
            <button
              onClick={() => navigate('/profile')}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
            >
              Profile & Settings
            </button>
            <button
              onClick={handleAuth}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    )
  );
};
export default ProfileMenu;
