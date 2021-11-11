import React from 'react';
import { Route, Redirect } from 'react-router';
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
        {isLogged ? <Redirect to="/authenticated" /> : <Route {...props}/>}
        </>
    )

}

export default PublicRoute