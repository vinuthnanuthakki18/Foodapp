import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Check login status on page load
    useEffect(() => {
        axios.get("http://localhost:5000/me", { withCredentials: true })
            .then((res) => setUser(res.data.username))
            .catch(() => setUser(null));
    }, []);

    // Login function
    const login = async (username, password) => {
        
        const res = await axios.post("http://localhost:5000/login", { username, password }, { withCredentials: true });
        if (res.data.success) setUser(username);
    };

    // Logout function
    const logout = async () => {
        await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
