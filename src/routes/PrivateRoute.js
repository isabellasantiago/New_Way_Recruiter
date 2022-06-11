
import React, { useContext } from "react";
import { Login } from "../pages/Login/Login";
import { AuthContext } from "../services/context/auth2";

const PrivateRoute = ({Item}) => {
    const { authenticated, loading } = useContext(AuthContext); 

    if (loading) return (<div>loading....</div>)

    return authenticated > 0 ? <Item /> : <Login />
}

export default PrivateRoute