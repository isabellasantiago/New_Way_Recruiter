import React from 'react';


import aroundTheWorldImg from '../../assets/images/aroundTheWorld.svg';
import hireImg from '../../assets/images/hire.svg';
import hiringImg from '../../assets/images/hiring.svg';
import resumeImg from '../../assets/images/resume.svg';

import {Login} from '../Login/Login';

import './home.scss';

export function Home() {
    return(
        <div id="page-get-started">
            <header>
                <a href="/" id="logo">
                    <h1>New <span>Way</span> Recruiter</h1>
                </a>
                <div id="pages">
                    <a href="/login">Login</a>
                    <a href="#">Sou empresa</a>
                    <a href="/candidato">Sou candidato</a>
                </div>
            </header>
            <main>
                <div id="content">
                    <div id="description">
                        <h1>Um novo jeito de fazer a melhor escolha.</h1>
                        <p>Acreditamos que a melhor escolha é importante para a conquista de qualquer objetivo.
                        Seja o que você estiver trilhando, deixe com a gente. Nós cuidamos disso para você.</p>
                    </div>

                    <div id="advantages">
                        <h2>Vantagens para empresas:</h2>
                        <p>A plataforma que cuida da sua triagem, entregando a você o candidato com maior aderência a vaga e perfil da empresa!
                            <ul>
                                <li>Aumente a eficácia e eficiência das suas triagens</li>
                                <li>Deixe suas contratações mais acertivas</li>
                            </ul>
                        </p>
                        <h2>Vantagens para candidatos:</h2>
                        <p>Chega de passear por vagas e encontre empresas que se encaixam com o que você mais procura neste momento!
                            <ul>
                                <li>Encontre a vaga que você quer</li>
                                <li>Trabalhe em empresas que combinem com você</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div id="images">
                    <div>
                        <img src={hiringImg} id="hiring"/>
                        <img src={hireImg} id="hire"/>
                        <img src={resumeImg} id="resume"/>
                        <img src={aroundTheWorldImg} id="aroundTheWorld"/>
                    </div>
                </div>
            </main>
        </div>
    )
}
