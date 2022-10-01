import React, { useContext, useEffect, useState } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import editPencil from  '../../../assets/images/pencil1.svg';
import * as S from './style';
import { HeaderComponent } from '../../../components/HeaderComponent/HeaderComponent';

import { Experiencias } from './Components/Experiencias/Experiencias';
import { Formacaoes } from './Components/Formacoes/Formacoes';
import { Idiomas } from './Components/Idiomas/Idiomas';
import { Preferencias } from './Components/Preferencias/Preferencias';
import { AuthContext } from '../../../services/contexts/auth';
import { ProfilePic } from '../../../components/ProfilePic';import { getCandidateById } from '../../../shared/functions/candidate';
;

const profilephoto = 'https://epipoca.com.br/wp-content/uploads/2020/12/Matthew-Perry.jpg'

export function ProfileVCand(){
  const { id } = useParams();
  const { authenticated, user } = useContext(AuthContext);
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  const [candidate, setCandidate] = useState();

  const handleClick = () => {
    navigate(`/candidate/resume/${user?.id}`);
  }

  useEffect(() =>{
    const getCandidate = async () => {
      const { data: c } = await getCandidateById(id);
      setCandidate(c);
    }
    getCandidate();
  }, [id]);
  

  if(!authenticated || !user || !token) {
    navigate('/login');
  }
  return(
    <>
      <HeaderComponent candidate={true} perfil="selected"/>
      <S.Section>
          <S.ProfileInfo>
              <ProfilePic 
                size="177px"
                link={profilephoto}
                border="7px solid #0367A5"
              />
              <S.ProfileDescription> 
              <h2>{candidate?.name} {candidate?.lastName}</h2>
              <p>Designer UX Pleno - há 1 ano</p>
              </S.ProfileDescription>
              <S.ControlBtn>
               {user?.id === candidate?.id ? (
                <S.IconBtn onClick={handleClick}>
                <S.Icon alt="editar perfil" className="editicon" src={editPencil}/>
               </S.IconBtn>
               ) : null}
              {/* <button onClick={}className="entContato"  disabled  ><span>Entrar em contato</span></button> */}
              </S.ControlBtn>
          </S.ProfileInfo>
          <Experiencias/>
          <Formacaoes/>
          <S.Row>
            <Idiomas/>
            <Preferencias/>
          </S.Row>    
        </S.Section>
    </>
  );
}