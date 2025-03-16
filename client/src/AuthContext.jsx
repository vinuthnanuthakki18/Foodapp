import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from '../config';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Check login status on page load
    useEffect(() => {
        axios.get(`${API_BASE_URL}/me`, { withCredentials: true })
            .then((res) => setUser(res.data.username))
            .catch(() => setUser(null));
    }, []);

    // Login function
    const login = async (username, password) => {
        
        const res = await axios.post(`${API_BASE_URL}/login`, { username, password }, { withCredentials: true });
        if (res.data.success) setUser(username);
    };

    // Logout function
    const logout = async () => {
        await axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
