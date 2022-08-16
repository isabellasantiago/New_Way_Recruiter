import { createContext, useEffect, useState} from "react";
import { signin } from "../../shared/functions/signin";
import { useNavigate} from 'react-router-dom';
import Api from "../mainApi";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser) setUser(JSON.parse(recoveredUser));

        setLoading(false);

    }, [])

    const login = async (email, password) => {
        const response = await signin(email, password);
        
        const loggedUser = response.data.user;
        const token = response.data.token;

        localStorage.setItem('user', JSON.stringify(loggedUser));
        localStorage.setItem('token', token);

        Api.defaults.headers.Authorization = `Bearer ${token}`;


        setUser(loggedUser);
        navigate('/home');
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        Api.defaults.headers.Authorization = null;

        setUser(null);
        navigate('/login');
    }

    return <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout }}>{children}</AuthContext.Provider>
}

