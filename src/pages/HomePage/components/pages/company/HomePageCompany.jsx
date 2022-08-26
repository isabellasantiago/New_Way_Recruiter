import React, { useMemo, useState } from 'react';
import CompanyPage from '../../../../../components/CompanyPage';
import * as S from './style';
import EditIcon from '@material-ui/icons/Edit';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useEffect } from 'react';
import { getCurrentUser } from '../../../../../shared/functions/user';
import { Info } from './components/Info';
import { EditModal } from './components/Info/EditModal';


export const HomePageCompany = () => {
    const [company, setCompany] = useState();
    const [open, setOpen] = useState(false);

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

    const photo = company?.imageURL || <AccountCircleIcon />;
    const cover = company?.cover || '';

    console.log(company);
    return (
        <>
                    <CompanyPage
            companyID={company?.id}
        >
            <S.Container>
                <S.CoverContainer cover={cover}>
                    <S.Cover src={cover}/>
                </S.CoverContainer>
                <S.ProfilePic src={photo}/>
                <S.Content>
                <S.EditBtn onClick={() => setOpen(true)}>
                    <EditIcon />
                </S.EditBtn>
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
        {open && (
            <EditModal 
                company={company}
                open={open}
                setOpen={setOpen}
                successMessage="Perfil atualizado"
            />
        )}
        </>
    )
}