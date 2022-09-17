import React from 'react';
import {useEffect, useState} from 'react';
import * as S from './style';
import { ModalBase } from '../../components/Modal';


export  function ModalCandidato({ candidates, handleClose, open, title }) {
  const [users, setUsers] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setUsers(candidates);
  }, [candidates]);
  
  return (
      <ModalBase
        open={open}
        handleClose={handleClose}
        width='800px'
        height='650px'
        bgColor='#f6f6f6'
      >   
        <S.Container>
              <S.TitleBox>
                <S.Title> Conheça  os  candidatos! </S.Title>
                <S.Phrase>Vaga: {title}.</S.Phrase>
              </S.TitleBox>
              <S.Content class="Content" showMore={showMore}>
                {users.map((user, index) => {
                  if(index < 4){
                    return(
                      <S.Candidates key={users.id }>
                         <S.PhotoBox>
                           <S.ProfileImage src={user.imageURL}  alt="perfilImg"/>
                           <S.InfoContainer>
                             <h2>{user.name} {user.lastName}</h2>
                             <p>Profissão: {user.role}</p>
                             <p>Experiência: {user.experienceTime}</p>
                           </S.InfoContainer>
                         </S.PhotoBox>
                         <S.PercentContainter>
                             <S.PercentValue>{user.percent}</S.PercentValue>
                             <S.SubPercentTitle>Aderente à vaga</S.SubPercentTitle>
                             <S.LinkProfile href="#">conhecer o candidato</S.LinkProfile>
                         </S.PercentContainter>
                      </S.Candidates>
                    )
                  }
                  return showMore && (
                    <S.Candidates key={users.id }>
                         <S.PhotoBox>
                           <S.ProfileImage src={user.imageURL}  alt="perfilImg"/>
                           <S.InfoContainer>
                             <h2>{user.name} {user.lastName}</h2>
                             <p>Profissão: {user.role}</p>
                             <p>Experiência: {user.experienceTime}</p>
                           </S.InfoContainer>
                         </S.PhotoBox>
                         <S.PercentContainter>
                             <S.PercentValue>{user.percent}</S.PercentValue>
                             <S.SubPercentTitle>Aderente à vaga</S.SubPercentTitle>
                             <S.LinkProfile href="#">conhecer o candidato</S.LinkProfile>
                         </S.PercentContainter>
                      </S.Candidates>
                  )
                })}
              </S.Content>
              <S.SeeMore onClick={() => setShowMore(value => !value)}>{showMore ? 'Ver menos' : 'Ver mais'}</S.SeeMore>
        </S.Container>
      </ModalBase>
  );
}