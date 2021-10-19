import React from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';

export const ProtectedRoute = ({children}) => {
    const auth = useAuth();

    if(!auth.email){
        return <h1>you are note registered</h1>
    }

    return children
}