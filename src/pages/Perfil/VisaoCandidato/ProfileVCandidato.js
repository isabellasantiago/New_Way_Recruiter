import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileVCandidato.scss';
import profilephoto  from '../../../assets/images/pexels-vazhnik-7562313.jpg';
import editPencil from  '../../../assets/images/pencil1.svg';

import { HeaderComponent } from '../../../components/HeaderComponent/HeaderComponent';

import { Experiencias } from './Components/Experiencias/Experiencias';
import { Formacaoes } from './Components/Formacoes/Formacoes';
import { HardSoftSkills } from './Components/HardSoftSkills/HardSoftSkills';
import { Idiomas } from './Components/Idiomas/Idiomas';
import { Preferencias } from './Components/Preferencias/Preferencias';

export function ProfileVCand(){

  return(
    <div className="profilevcand">
       <HeaderComponent candidato={true} perfil="selected"/>

            <section>

                <div className="profile">
                    
                 
                    <img src={profilephoto} className="" alt="profilephoto"/>   
                    <div className="profile-description"> 
                    <h2>Matheus Félix</h2>
                    <p>Designer UX Pleno - há 1 ano</p>
                    </div>
                   
                    <div className="control-btn">

                   <Link to='/edit_or_delete/candidato'> <img  alt="editar perfil" className="editicon" src={editPencil}/></Link>
                    <button onClick={()=>{}}className="entContato"  disabled  ><span>Entrar em contato</span></button>

                    
                    </div>

                </div>

                <Experiencias/>
                <Formacaoes/>
                <HardSoftSkills/>

                <div className="row">
                  <Idiomas/>
                  <Preferencias/>
                </div>
                
            </section>
    </div>
  );
}