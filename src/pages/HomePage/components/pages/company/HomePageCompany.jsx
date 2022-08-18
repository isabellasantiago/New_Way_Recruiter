import React from 'react';
import CompanyPage from '../../../../../components/CompanyPage';
import * as S from './style';
import EditIcon from '@material-ui/icons/Edit';


export const HomePageCompany = () => {
    return (
        <CompanyPage>
            <S.Container>
                <S.CoverContainer>
                    cover
                    <S.ProfilePicContainer>
                        <S.ProfilePic src=""/>
                    </S.ProfilePicContainer>
                </S.CoverContainer>
                <S.Content>
                <S.EditBtn>
                    <EditIcon />
                </S.EditBtn>
                </S.Content>
            </S.Container>
        </CompanyPage>
    )
}