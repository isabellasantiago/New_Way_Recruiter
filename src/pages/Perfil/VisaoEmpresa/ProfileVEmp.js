import React from 'react';
import './style.scss';

import { NavLink } from 'react-router-dom';

import profilephoto  from '../../../assets/images/pexels-vazhnik-7562313.jpg';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import editPencil from  '../../../assets/images/pencil1.svg';

import { HeaderComponent } from '../../../components/HeaderComponent/HeaderComponent';
import { Experiencias } from '../VisaoCandidato/Components/Experiencias/Experiencias';
import { Formacaoes } from '../VisaoCandidato/Components/Formacoes/Formacoes';
import { Idiomas } from '../VisaoCandidato/Components/Idiomas/Idiomas';
import { Preferencias } from '../VisaoCandidato/Components/Preferencias/Preferencias';
import { HardSoftSkills } from '../VisaoCandidato/Components/HardSoftSkills/HardSoftSkills';
import { ModalContato } from '../VisaoCandidato/Components/modalContato/ModalContato';



export function ProfileVEmp(){
  return(
    <div className="profilevemp">
      <HeaderComponent empresa={true} perfil="selected"/>

<section>

    <div className="profile">
        
     
        <img src={profilephoto} className="" alt="profilephoto"/>   
        <div className="profile-description"> 
        <h2>Matheus Félix</h2>
        <p>Designer UX Pleno - há 1 ano</p>
        </div>
       
        <div className="control-btn">

       
        <ModalContato/>
        

        
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