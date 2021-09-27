import React from 'react';
import { Home } from  '../../pages/Home/Home';

import './header.scss';

export function HeaderCandidato(){
    return (
    <>
    <header>
        <div>
            <a href={Home} id='logo'>
                <h1>New <span>Way</span> Recuiter</h1>
            </a>
            <p>Candidato</p>
        </div>
        <nav id='links'>
            <a href="#">Perfil</a>
            <a href="#">Vagas</a>
            <a href="#">Processos</a>
        </nav>
    </header>
    </>
    )
}