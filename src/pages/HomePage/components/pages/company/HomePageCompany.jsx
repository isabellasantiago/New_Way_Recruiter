import React, { useMemo, useState } from 'react';
import CompanyPage from '../../../../../components/CompanyPage';
import * as S from './style';
import EditIcon from '@material-ui/icons/Edit';
import { useEffect } from 'react';
import { getCurrentUser } from '../../../../../shared/functions/user';
import { Info } from './components/Info';


export const HomePageCompany = () => {
    const [company, setCompany] = useState();

    const infos = useMemo(() => {
        return [
            {title: 'Missão', text: company?.mission},
            {title: 'Valores', text: company?.values},
            {title: 'Visão', text: company?.mission},
        ]
    }, [company])

    useEffect(() => {
        const getUser = async () => {
            const user = await getCurrentUser();
            setCompany(user.data)
            return user.data;
        }
        getUser();
    }, [])

    console.log(company);
    return (
        <CompanyPage>
            <S.Container>
                <S.CoverContainer>
                    
                    <S.ProfilePicContainer>
                        
                    </S.ProfilePicContainer>
                </S.CoverContainer>
                <S.Content>
                <S.EditBtn>
                    <EditIcon />
                </S.EditBtn>
                <S.ProfilePic src={company?.imageURL}/>
                <S.CompanyName>
                    {company?.corporateName}
                </S.CompanyName>
                <S.AboutContainer>
                    <S.CompanyIMG src={company?.photo}/>
                    <S.About>{company?.aboutCompany}</S.About>
                </S.AboutContainer>
                <S.LeftContainer>
                    {infos.map(({title, text}, index) => (
                        <Info
                            title={title}
                            text={text}
                            color={index === 1 && '#7BD2F4'}
                        />
                    ))}
                </S.LeftContainer>
                </S.Content>
            </S.Container>
        </CompanyPage>
    )
}