import React from 'react';
import { Route, Navigate } from 'react-router-dom'
import authService from '../../services/auth.service'


const PrivateRoute = (props) => {
    const isLogged = () => {
        const user = authService.getLoggedUser()
        if(!user){
            return false
        }
        return true
    }


    return(
        <>
        {isLogged ? (
            <Route {...props} />
        ): <Navigate to="/login" />
        }
        </>
    )
}


export default PrivateRoute