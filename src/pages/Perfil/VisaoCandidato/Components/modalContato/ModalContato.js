import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import { useModal } from 'react-hooks-use-modal';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import './style.scss';

export function  ModalContato() {
  const number = 14996112228;
  const email = 'rafaelfigueiredojunior7@gmail.com';
  const [Modal,  open, close, isOpen] = useModal('root', {
  
    preventScroll: true,
    closeOnOverlayClick: false,
   
   
  });
  return (
    <div>
      <button onClick={open}className="entContato"    ><span>Entrar em contato</span></button>
      <Modal  >
        <div className="mod">
        <button onClick={close}><CloseIcon className="close"/></button>
          <h1>Você deseja entrar em contato com o candidato?</h1>

          <div className="row">
          <a href={`https://api.whatsapp.com/send?phone=55${number}`}><WhatsAppIcon className="whatsicon"/>    <p>Entre em contato pelo whatsapp</p></a>
          </div>

          <div className="row">
          <a href={`mailto:<nowiki>${email}?subject=link HTML`}> <MailOutlineIcon className="emailicon"/> <p>Entre em contato por e-mail</p></a>
          </div>
        </div>
      </Modal>
    </div>
  );
}