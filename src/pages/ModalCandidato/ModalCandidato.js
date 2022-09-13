import React from 'react';
import {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import './modal-candidato.scss';
import Toggle from './Toggle';
import { ModalBase } from '../../components/Modal';


export  function ModalCandidato({ candidates, setOpen, open, title }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(candidates);
  }, [candidates]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
      <ModalBase
        open={open}
        onClose={handleClose}
      >   
        <div id="modalcenter">
              <div class="titleBox">
                <h2 id="spring-modal-title"> Conheça  os  candidatos ! </h2>
              
                <p id="spring-modal-description">Vaga: {title}.</p>
              </div>
                {users.map((user) => (
               <div key={users.id } className="candidatos">
                  <div class="photoBox">
                    <div className="perfilImg">
                      <img src={user.imageURL}  alt="perfilImg"/>
                    </div>
                    <div className="info">
                      <h2>{user.name} {user.lastName}</h2>
                      <p>Profissão anterior: {user.role}</p>
                      <p>Experiência: {user.experience}</p>
                    </div>
                  </div>
                  <div className="percent">
                      <h2>{user.percent}</h2>
                      <h3>Aderente à vaga</h3>
                      <a href="#">conhecer o candidato</a>
              
                  </div>
                </div>
                )
              )}
              <Toggle />            
        </div>
      </ModalBase>
  );
}