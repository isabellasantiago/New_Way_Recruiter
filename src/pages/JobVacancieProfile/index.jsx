import React, { useEffect, useState, useLayoutEffect, useContext } from "react";
import AssignmentIcon from '@material-ui/icons/Assignment';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CompanyPage from '../../components/CompanyPage';
import { AuthContext } from "../../services/contexts/auth";
import { UserTypeEnum } from "../../shared/enums/userType.enum";
import * as S from './style';
import { useParams } from "react-router-dom";
import { getJobVacancieByID } from "../../shared/functions/jobVacancie";
import { companyType, contract, level } from "../../shared/functions/convert";

export const JobVacancieProfile = () => {
    
    const { id } = useParams();
    const { logout } = useContext(AuthContext);
    const [hide, setHide] = useState(false);
    const [company, setCompany] = useState({
        imageURL: '',
        corporateName: '',
        type: 0
    });
    const [jobVacancie, setJobVacancie] = useState({
        level: '',
        contractType: '',
        salary: 0,
        cityAndState: '',
        about: '',
    });

    const user = JSON.parse(localStorage.getItem('user'));

    useLayoutEffect(() => {
        if(user.type === UserTypeEnum.CANDIDATE ) setHide(value =>!value);        
    },[user])

    useLayoutEffect(() => {
        const getJobVacancie = async () => {
            const { data: jv } = await getJobVacancieByID(id);
            setJobVacancie(jv);
            setCompany(jv.company);
        }
        getJobVacancie();
    }, [id]);

    console.log('jv', jobVacancie)
    console.log('company', company)

    const profile = (
        <S.Content>
            <S.Container>
                <S.Row>
                    <S.Row2>
                        <S.ProfilePicBox>
                            <S.ProfilePic
                                src={company?.imageURL}
                            />
                        </S.ProfilePicBox>
                    <S.DataBox>
                        <S.CompanyName>{company?.corporateName}</S.CompanyName>
                        <S.LabelValueContainer justify="space-between">
                        <S.Name>{jobVacancie?.title}</S.Name>
                        <S.LabelValueContainer >
                            <S.Label>Nível:</S.Label>
                            <S.Value color="#012E40">{level(jobVacancie?.level)}</S.Value>
                        </S.LabelValueContainer>
                        </S.LabelValueContainer>
                        
                        <S.LabelValueContainer justify="space-between">
                            <S.IconBox>
                                <div>
                                    <MonetizationOnIcon fontSize="medium"/>
                                </div>
                                <S.IconContainer>
                                    <S.Label>Salário</S.Label>
                                    <S.Value salary>{jobVacancie?.salary?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</S.Value>
                                </S.IconContainer>
                            </S.IconBox>
                            <S.IconBox>
                                <div>
                                    <AssignmentIcon fontSize="medium"/>
                                </div>
                                <S.IconContainer>
                                    <S.Label ml="10px">Contrato</S.Label>
                                    <S.Value>{contract(jobVacancie?.contractType || '')}</S.Value>
                                </S.IconContainer>
                            </S.IconBox>
                        </S.LabelValueContainer>
                    </S.DataBox>
                    </S.Row2>
                </S.Row>
                <S.Row h='80px'>
                    <S.Row2>
                        <S.LabelValueContainer w="150px">
                            <S.LabelValueContainer justify="space-between">
                            <S.Label>Local</S.Label>
                            <S.Value>{jobVacancie?.cityAndState}</S.Value>
                            </S.LabelValueContainer>
                        </S.LabelValueContainer>
                        <S.LabelValueContainer>
                            <S.LabelValueContainer>
                            <S.Label>Empresa</S.Label>
                            <S.Value>{companyType(company?.type)}</S.Value>
                            </S.LabelValueContainer>
                            
                        </S.LabelValueContainer>
                    </S.Row2>
                </S.Row>
                <S.Row>
                    <S.Row2>
                        <S.Label>Sobre a vaga</S.Label>
                        <S.Value notBold textArea>{jobVacancie?.about}</S.Value>
                    </S.Row2>
                </S.Row>
            </S.Container>
            <S.BtnBox>
            <S.Btn>Encerrar vaga</S.Btn>
            <S.Btn>Editar vaga</S.Btn>
            <S.Label color="#023859">Conheça os candidatos!</S.Label>
            <span>foto foto foto</span>
            <S.Btn w="150px" h="22px" bold> conhecer candidatos</S.Btn>
            </S.BtnBox>
        </S.Content>
    )

    const bodyCompany = (
        <>
        <CompanyPage>
            {profile}
        </CompanyPage>
        </>
    )

    if(!user) logout();

    return(
        <>
        {user?.type === UserTypeEnum.COMPANY ? (bodyCompany) : 'uhu'}
        </>
    )
}