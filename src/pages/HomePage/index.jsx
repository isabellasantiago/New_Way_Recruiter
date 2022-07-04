import React, {useEffect, useState, useContext} from 'react';
import { AuthContext } from '../../services/contexts/auth';
import { CandidateHomePage } from './components/pages/candidate/Homepage';

export const HomePage = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <>
        {user.type === "candidate" ? <CandidateHomePage/> : <h1>Hello crap!</h1>}
        </>
    )
}