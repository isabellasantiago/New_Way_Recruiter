import React, { useContext } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as S from './style';
import editPencil from  '../../../assets/images/pencil1.svg';
import { Experiencias } from './Components/Experiencias/Experiencias';
import { Formacaoes } from './Components/Formacoes/Formacoes';
import { Idiomas } from './Components/Idiomas/Idiomas';
import { Preferencias } from './Components/Preferencias/Preferencias';
import { AuthContext } from '../../../services/contexts/auth';
import { ProfilePic } from '../../../components/ProfilePic';
import { getCandidateById, getResume } from '../../../shared/functions/candidate';
import { CandidatePage } from '../../../components/CandidatePage';
import { orderByLastDate } from '../../../shared/functions/candidate/functions';
import { contractDescription, levelDescription } from '../../../shared/functions/convert/texts';


const today = new Date();


export function ProfileVCand(){
  const { id } = useParams();
  const { authenticated, user } = useContext(AuthContext);
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/candidate/resume/${user?.id}`);
  }

  const { data: candidate, isLoading: loadingCandidate} = useQuery('candidate', async () => {
    const { data } = await getCandidateById(id);
    return data
  })

  const { data: resume, isLoading } = useQuery('resume', async () => {
    const { data: r } = await getResume(user?.id);
    return r;
  })

  if(isLoading || loadingCandidate){
   return ( <h2>Carregando...</h2>)
  }

  if(!authenticated || !user || !token) {
    navigate('/login');
  }
  const handlePreviousJobs = () => {
    const dates = resume?.previousJobs?.map((job) => {
      if(!job.toDate) return { ...job, toDate: today };
      return job
    });
    const ordered = orderByLastDate(dates);

  }
  console.log('resume', resume)

  const pref = {
    contractType: contractDescription(resume?.personalData.contractType),
    level: levelDescription(resume?.personalData.level),
  }

  return(
    <CandidatePage bgColor='#F6F6F6'>
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
              </S.ControlBtn>
          </S.ProfileInfo>
          <Experiencias jobs={resume?.previousJobsInfo}/>
          <Formacaoes formations={resume?.academicsInfo}/>
          <S.Row>
            <Idiomas languages={resume?.languagesInfo}/>
            <Preferencias preferences={pref}/>
          </S.Row>    
        </S.Section>
    </CandidatePage>
  );
}