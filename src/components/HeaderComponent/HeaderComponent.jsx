import React, { useState } from 'react';
import { Home } from  '../../pages/Home/Home';
import { NavLink } from 'react-router-dom';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

import './header.scss';

export function HeaderComponent({candidato}){
    const [candidate, setCandidate] = useState(candidato)
    return (
    <>
        
    {candidate ? (
        
        <header>
        <div>
            <a href={Home} id='logo'>
                <h1>New <span>Way</span> Recuiter</h1>
            </a>
            <p>Candidato</p>
        </div>
        <nav id='links'>
                <NavLink exact to="#" >Perfil</NavLink>
                <NavLink exact to="#" > Vagas</NavLink>
                <NavLink  exact to="/editdeletecandidato" > Processos</NavLink>
                <NavLink  exact to="/editdeletecandidato" activeClassName="selected" > <SettingsOutlinedIcon/> </NavLink>
                <button>
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
                <NavLink  exact to="/editdeletecandidato" activeClassName="selected" > <SettingsOutlinedIcon/> </NavLink>
        </nav>
    </header>
    )}
    
    </>
    )
}