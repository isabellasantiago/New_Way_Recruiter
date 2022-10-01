import React, { useContext } from 'react';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { JobVacancieDropDown } from './components/JobVacancieDropDown';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../services/contexts/auth';

import { HeaderStyle } from './style';

export function HeaderComponent({
    candidate,
    perfil,
    config,
    processos,
    setOpenModal = () => {},
}){
    const { logout, user } = useContext(AuthContext);

    const userCandidate = user?.type === 'candidate' && user;

    const handleLogout = () => {
        logout();
    }
    return (
    <>
    {candidate === true ? (
    <HeaderStyle>
        <header>
            <div>
                <NavLink exact to="/home" id='logo'>
                    <h1>New <span>Way</span> Recuiter</h1>
                </NavLink>
                <p>Candidato</p>
            </div>
            <nav id='links'>
                    <NavLink exact to={`/candidate/profile/${userCandidate?.id}`} activeClassName={perfil}>
                        Perfil
                    </NavLink>
                    <NavLink exact to="/editdeletecandidato" activeClassName={processos}>
                        Processos
                    </NavLink>
                    <NavLink exact to="/edit_or_delete/candidato" activeClassName={config} > <SettingsOutlinedIcon/>
                    </NavLink>
                    <button onClick={handleLogout}>
                        <LogoutIcon color="white"/>
                    </button>
            </nav>
        </header>
    </HeaderStyle>
    ) : (
        <HeaderStyle>
            <header>
            <div>
                <NavLink exact to="/home" id='logo'>
                    <h1>New <span>Way</span> Recuiter</h1>
                </NavLink>
                <p>Empresa</p>
            </div>
            <nav id='links'>
                    <JobVacancieDropDown setOpenModal={setOpenModal}/>
                    <button onClick={handleLogout}>
                        <LogoutIcon color="white"/>
                    </button>
            </nav>
                </header>
        </HeaderStyle>
    )}
    
    </>
    )
}