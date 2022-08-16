import React, { useState, useContext } from 'react';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { JobVacancieDropDown } from './components/JobVacancieDropDown';
import { Home } from  '../../pages/Home/Home';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../services/contexts/auth';

import {HeaderStyle} from './style';

export function HeaderComponent({
    candidato,
    perfil,
    vagas,
    config,
    processos,
    setOpenModal,
}){
    const [candidate ] = useState(candidato)

    const {logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }
    return (
    <>
        
    {candidate ? (
        
    <HeaderStyle>
        <header>
            <div>
                <a href="/" id='logo'>
                    <h1>New <span>Way</span> Recuiter</h1>
                </a>
                <p>Candidato</p>
            </div>
            <nav id='links'>
                    <NavLink exact to="#" activeClassName={perfil}>Perfil</NavLink>
                    <NavLink exact to="#" activeClassName={vagas}> Vagas</NavLink>
                    <NavLink  exact to="/editdeletecandidato" activeClassName={processos}> Processos</NavLink>
                    <NavLink  exact to="/edit_or_delete/candidato" activeClassName={config} > <SettingsOutlinedIcon/> </NavLink>
                    <button onClick={ev => logout()}>
                        <LogoutIcon color="white"/>
                    </button>
            </nav>
        </header>
    </HeaderStyle>
    ) : (
        <HeaderStyle>
            <header>
            <div>
                <a href={Home} id='logo'>
                    <h1>New <span>Way</span> Recuiter</h1>
                </a>
                <p>Empresa</p>
            </div>
            <nav id='links'>
                    <NavLink exact to="" >Perfil</NavLink>
                    <JobVacancieDropDown setOpenModal={setOpenModal}/>
                    <NavLink  exact to="/edit_or_delete/empresa" activeClassName="selected" > <SettingsOutlinedIcon/> </NavLink>
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