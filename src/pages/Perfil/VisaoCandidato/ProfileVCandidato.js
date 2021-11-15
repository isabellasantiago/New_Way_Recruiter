import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProfileVCandidato.scss';
import profilephoto  from '../../../assets/images/pexels-vazhnik-7562313.jpg';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import editPencil from  '../../../assets/images/pencil1.svg';
import neon from '../../../assets/images/neon.svg';
import { HeaderComponent } from '../../../components/HeaderComponent/HeaderComponent';



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

                    <img alt="editar perfil" className="editicon" src={editPencil}/>
                    <button onClick={()=>{}} className="entContato"><span>Entrar em contato</span></button>

                    
                    </div>

                </div>

                <div className="experiencias">
                    <h2>Experiências</h2>
                    <div className="center">
                        
                    
                    <div className="first-experience">
                            <img src={neon} alt="neon"/>
                            <h3>Neon</h3>
                            <div className="jobsline">
                        
                            <span>
                               <div className="ball">
                                  
                                   </div>
                                   
                               <div className="ball"/>
                               <div className="ball"/>
                               
                            </span>
                            <h4>Designer UX</h4>
                            <p>jan. 2021 - o momento</p>

                            </div>
                          
                            
                    </div>
                    <hr/>
                  
                    </div>
                    
                </div>

                <div className="formacoes">
                    <h2>Formações</h2>
                </div>

            </section>
    </div>
  );
}