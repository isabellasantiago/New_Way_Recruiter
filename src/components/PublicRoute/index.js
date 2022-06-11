import React from 'react';
import { Route, Navigate } from 'react-router';
import authService from '../../services/auth.service'

const PublicRoute = (props) => {
    const isLogged = () => {
        const user = authService.getLoggedUser()
        if(!user){
            return false
        }
        return true
    }

    return(
        <>
        {isLogged ? <Navigate to="/authenticated" /> : <Route {...props}/>}
        </>
    )

}

export default PublicRoute