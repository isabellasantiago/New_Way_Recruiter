import React, { useState } from 'react';
import * as S from './style';
import { format } from 'date-fns'

import google from '../../../../../assets/images/google.png';
import flash from '../../../../../assets/images/flash.png';
import { levelDescription } from '../../../../../shared/functions/convert/texts';



export function Experiencias({jobs}) {
  const [complete, setComplete] = useState(true);

  console.log('jobs', jobs)
  const promotionJob = ('uhu');

  const oldJobs = (
    <>
    {jobs?.map((job) => {
      const fromDate = format(new Date(job?.fromDate), 'MMM yyyy');
      const toDate = job?.toDate ? format(new Date(job?.toDate), 'MMM yyyy') : 'o momento'
      const level = levelDescription(job?.level)
      return (
        <>
        <S.LastExperience>
           {/* IMG Profile component */}
          <S.JobsLine>
            <S.CompanyName complete={complete}>{job?.previousCompanyName}</S.CompanyName>
            <S.Date>{fromDate} - {toDate}</S.Date>
            <S.Row>
              <S.RoleTitle complete={complete}>{job?.role}</S.RoleTitle>
              <S.Level fontSize='18px'>Nível: {level}</S.Level>
            </S.Row>
          </S.JobsLine>
        </S.LastExperience>
        <S.Line/>
        </>
      )
    })}
    </>
  )
  return (
    <S.Main>
      <S.Title>Experiências</S.Title>
      <S.Center>
        {oldJobs}
      </S.Center>
    </S.Main>
  );
}

/*
   {jobs && jobs?.map((job) => {
        return (
          <>
          <S.LastExperience>
          {// IMG Profile component}
          <S.CompanyName complete={complete}>{job?.companyName}</S.CompanyName>
          <S.JobsLine>
            <span>
              <S.Timeline>
                <S.PromotionLineItem complete={complete}>
                  <S.Timestamp>
                  </S.Timestamp>
                  <S.Status>
                    <S.RoleTitle complete={complete}> Designer UX </S.RoleTitle>
                    <S.Date>jan. 2021 - o momento</S.Date>
                    <S.Level>Nível: Pl</S.Level>
                  </S.Status>
                </S.PromotionLineItem>
                <S.PromotionLineItem complete={complete}>
                  <S.Timestamp>
                  </S.Timestamp>
                  <S.Status>
                  <S.RoleTitle complete={complete}> Designer UX </S.RoleTitle>
                    <S.Date>jul. 2020 - jan. 2021</S.Date>
                    <S.Level>Nível: Jr</S.Level>
                  </S.Status>
                </S.PromotionLineItem>
                <S.PromotionLineItem complete={complete}>
                  <S.Timestamp>
                  </S.Timestamp>
                  <S.Status>
                  <S.RoleTitle complete={complete}> Designer UX </S.RoleTitle>
                    <S.Date>jan. 2020 - jul.2020</S.Date>
                    <S.Level>Nível: Estágio</S.Level>
                  </S.Status>
                </S.PromotionLineItem>
              </S.Timeline>
            </span>
          </S.JobsLine>
        </S.LastExperience>
        <S.Line/>
        </>
      )})}
*/