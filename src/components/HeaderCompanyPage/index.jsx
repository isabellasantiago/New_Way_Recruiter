import React from 'react';
import * as S from './style';


export const HeaderCompanyPage = ({cover, corporateName, photo }) => {

    return (
        <S.Container>
            <S.CoverContainer cover={cover}>
                <S.Cover src={cover}/>
            </S.CoverContainer>
            <S.ProfilePic src={photo}/>
            <S.Content>
            <S.CompanyName>
                {corporateName}
            </S.CompanyName>
            </S.Content>
        </S.Container>
    )
}