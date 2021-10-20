import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProfileVCandidato.scss';
import profilephoto  from '../../../assets/images/pexels-vazhnik-7562313.jpg';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import editPencil from  '../../../assets/images/pencil 1.svg'
import neon from '../../../assets/images/neon.svg';



export function ProfileVCand(){
  return(
    <div className="profilevcand">
       <header>
                <a href="/" id="logo">
                    <h1>New <span>Way</span> Recruiter</h1>

                    
                </a>
                <span className="cand">candidato</span>
                <div id="menus">
                    <NavLink exact to="/profilev_candidato" activeClassName="selected">Perfil</NavLink>
                    <NavLink exact to="/#" activeClassName="selected"> Vagas</NavLink>
                    <NavLink  exact to="/#" activeClassName="selected"> Processos</NavLink>
                </div>
            </header>

            <section>

                <div className="profile">
                    
                 
                    <img src={profilephoto} className="" alt="profilephoto"/>   
                    <div className="profile-description"> 
                    <h2>Matheus Félix</h2>
                    <p>Designer UX Pleno - há 1 ano</p>
                    </div>
                   
                    <div className="control-btn">

                    <img   className="editicon" src={editPencil}/>
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