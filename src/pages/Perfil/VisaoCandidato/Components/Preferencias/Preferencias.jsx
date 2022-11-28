import * as S from './style.js';

export function Preferencias({ preferences }) {
  const { contractType, level} = preferences;
  return (
    <S.Preferences>
      <S.Title>Preferências</S.Title>
      <S.Center>
        {preferences ? (
              <>
                <S.Row>
                <S.Circle />
                <S.PrefInfo>Contrato:  </S.PrefInfo>
                <S.PrefInfo bold={true} >{contractType}</S.PrefInfo>
                </S.Row>
                <S.Row>
                <S.Circle />
                <S.PrefInfo>Nível:  </S.PrefInfo>
                <S.PrefInfo bold={true}>{level}</S.PrefInfo>
                </S.Row>
              </>
            ) : null }
      </S.Center>
    </S.Preferences>
  );
}