import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem('isLoggedIn');
    const storedName = sessionStorage.getItem('username');
    const storedUserId = sessionStorage.getItem('userId');
    if (token === 'true' && storedName && storedUserId) {
      setIsLoggedIn(true);
      setUsername(storedName);
      setUserId(parseInt(storedUserId));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    if (isLoggedIn && username) {
      sessionStorage.setItem('username', username);
    }
    if (isLoggedIn && userId !== null) {
      sessionStorage.setItem('userId', userId);
      console.log("User ID set in sessionStorage:", userId);
    }
  }, [isLoggedIn, username, userId]); 

  const login = (name, id) => {
    setIsLoggedIn(true);
    setUsername(name);
    setUserId(id);
    localStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', name);
    sessionStorage.setItem('userId', id);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');

  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, userId, setUsername, setUserId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthenticationHook = () => useContext(AuthContext);
