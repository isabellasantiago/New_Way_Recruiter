import React, {useEffect, useState, useContext} from 'react';
import { AuthContext } from '../../services/context/auth2';
import { CandidateHomePage } from './components/pages/candidate/Homepage';

export const HomePage = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <>
        {user.type === "candidate" ? <CandidateHomePage/> : <h1>Hello crap!</h1>}
        </>
    )
}