import React, { useState } from 'react';
import { Home } from  '../../pages/Home/Home';
import { NavLink } from 'react-router-dom';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import authService from '../../services/auth.service';

import './header.scss';

export function HeaderComponent({candidato, perfil, vagas, config, processos}){
    const [candidate, setCandidate] = useState(candidato)

    async function logout(){
        authService.cleanLoggedUser()
        await window.location.reload()
    }
    return (
    <>
        
    {candidate ? (
        
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
    ) : (
        <header>
        <div>
            <a href={Home} id='logo'>
                <h1>New <span>Way</span> Recuiter</h1>
            </a>
            <p>Empresa</p>
        </div>
        <nav id='links'>
                <NavLink exact to="" >Perfil</NavLink>
                <NavLink exact to="" > Vagas</NavLink>
                <NavLink  exact to="/edit_or_delete/empresa" activeClassName="selected" > <SettingsOutlinedIcon/> </NavLink>
                <button onClick={ev => logout()}>
                    <LogoutIcon color="white"/>
                </button>
        </nav>
    </header>
    )}
    
    </>
    )
}