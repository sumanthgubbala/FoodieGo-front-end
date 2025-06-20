import { useState,useEffect,createContext,useContext } from "react";
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    useEffect(()=>{
        const token = localStorage.getItem('isLoggedIn');
        const storedName = sessionStorage.getItem('username');
        if(token) {
            setIsLoggedIn(true);
            setUsername(storedName || '');
        }
    },[]);
    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);
    const login = (name) => {
    setIsLoggedIn(true);
    setUsername(name);
    sessionStorage.setItem('username', name);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('isLoggedIn');
  };
    return(
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn,username, setUsername }}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthenticationHook = () => {
    return useContext(AuthContext);
}