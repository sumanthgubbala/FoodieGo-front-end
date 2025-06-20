import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('isLoggedIn');
    const storedName = sessionStorage.getItem('username');
    if (token === 'true' && storedName) {
      setIsLoggedIn(true);
      setUsername(storedName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    if (isLoggedIn && username) {
      sessionStorage.setItem('username', username);
    }
  }, [isLoggedIn, username]);

  const login = (name) => {
    setIsLoggedIn(true);
    setUsername(name);
    localStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', name);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, setUsername, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthenticationHook = () => useContext(AuthContext);
