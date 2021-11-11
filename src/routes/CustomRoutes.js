import React, {useState, useEffect} from 'react';
import { Route, useHistory } from 'react-router-dom';

import { isAuthenticated, getToken } from '../services/auth'


const CustomRoute = ({ isPrivate, ...rest }) => {
    const history = useHistory()
    const [token, setToken] = useState()
  
    useEffect(() => {
      const token = getToken()
  
      if(token) setToken(token)
  
     
    }, []);
  
  
    if (isPrivate && !token) {
      history.push('/login')
      return <></>;
    }
  
    return <Route {...rest} />;
  };
  
  export default CustomRoute;