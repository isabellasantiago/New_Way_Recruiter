import React, { useContext } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import editPencil from  '../../../assets/images/pencil1.svg';
import * as S from './style';
import { Experiencias } from './Components/Experiencias/Experiencias';
import { Formacaoes } from './Components/Formacoes/Formacoes';
import { Idiomas } from './Components/Idiomas/Idiomas';
import { Preferencias } from './Components/Preferencias/Preferencias';
import { AuthContext } from '../../../services/contexts/auth';
import { ProfilePic } from '../../../components/ProfilePic';
import { getCandidateById, getResume } from '../../../shared/functions/candidate';
import { CandidatePage } from '../../../components/CandidatePage';


export function ProfileVCand(){
  const { id } = useParams();
  const { authenticated, user } = useContext(AuthContext);
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/candidate/resume/${user?.id}`);
  }

  const { data: candidate} = useQuery('candidate', async () => {
    const { data } = await getCandidateById(id);
    return data
  })

  const { data: resume } = useQuery('resume', async () => {
    const { data: r } = await getResume(user?.id);
    return r;
  })

  if(!authenticated || !user || !token) {
    navigate('/login');
  }
  return(
    <CandidatePage>
      <S.Section>
          <S.ProfileInfo>
              <ProfilePic 
                size="177px"
                link={resume?.personalData?.imageURL}
                border="7px solid #0367A5"
              />
              <S.ProfileDescription> 
              <h2>{candidate?.name} {candidate?.lastName}</h2>
              <p>{resume?.personalData?.role}</p>
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
    </CandidatePage>
  );
}