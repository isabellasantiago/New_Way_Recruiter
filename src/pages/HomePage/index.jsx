import React, { useContext } from 'react';
import { AuthContext } from '../../services/contexts/auth';
import { CandidateHomePage } from './components/pages/candidate/Homepage';
import {HomePageCompany} from './components/pages/company/HomePageCompany';

export const HomePage = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <>
        {
        user.type === "candidate" ?
        <CandidateHomePage/> :
        <HomePageCompany/>
        }
        </>
    )
}