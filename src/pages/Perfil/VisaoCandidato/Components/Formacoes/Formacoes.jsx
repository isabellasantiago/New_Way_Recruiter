import { format } from 'date-fns';
import React from 'react';
import { ProfilePic } from '../../../../../components/ProfilePic';
import { formationDescription } from '../../../../../shared/functions/convert/texts';
import * as S from './style.js';

export function Formacaoes({ formations }) {
  return (
    <S.Formacoes>
      <S.Title>Formações</S.Title>
      <S.Center>
        {formations?.length > 0 ? (
          formations?.map((formation) => {
            const {
              graduationEndDate,
              graduationStartDate,
              courseName,
              academicFormation,
            } = formation;

            const endDate = graduationEndDate ? format(new Date(graduationEndDate), 'MMM yyyy') : ' o momento';
            const startDate = graduationStartDate ? format(new Date(graduationStartDate), 'MMM yyyy') : null;
            const type = formationDescription(academicFormation);

            return (
              <S.LastExperience>
                <ProfilePic border="4px solid #0367A5"/>
                <S.JobsLine>
                  <S.CourseName>{courseName}</S.CourseName>
                  <S.Date>{startDate} - {endDate}</S.Date>
                  <S.Row>
                    <S.Level>{type}</S.Level>
                  </S.Row>
                </S.JobsLine>
              </S.LastExperience>
              )
          })
        ) : null}
      </S.Center>
    </S.Formacoes>
  );
}