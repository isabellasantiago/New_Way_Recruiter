import React from 'react';
import { languageLevelDescription } from '../../../../../shared/functions/convert/texts.js';
import * as S from './style.js';

export function Idiomas({ languages }) {
  return (
    <S.Idiomas>
      <S.Title>Idiomas</S.Title>
      <S.Center>
        {languages?.length > 0 ? (
          languages?.map((language) => {
            const { languageName, languageLevel } = language
            const level = languageLevelDescription(languageLevel)
            return (
              <S.ListItem>
                <S.Circle />
                <S.LanguageInfo>{languageName} - </S.LanguageInfo>
                <S.LanguageInfo>{level}</S.LanguageInfo>
              </S.ListItem>
            )
          })
        ) : null}
      </S.Center>
    </S.Idiomas>
  );
}