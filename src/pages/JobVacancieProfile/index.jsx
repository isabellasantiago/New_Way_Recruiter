import React, { useState, useLayoutEffect, useContext } from "react";
import AssignmentIcon from '@material-ui/icons/Assignment';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CompanyPage from '../../components/CompanyPage';
import { AuthContext } from "../../services/contexts/auth";
import { UserTypeEnum } from "../../shared/enums/userType.enum";
import * as S from './style';
import { useNavigate, useParams } from "react-router-dom";
import { getJobVacancieByID } from "../../shared/functions/jobVacancie";
import { companyTypeDescription, contractDescription, levelDescription } from "../../shared/functions/convert";
import { YesNoModal } from "../../components/YesNoModal";
import { notify } from "../../shared/functions/notify/notify";
import Api from "../../services/mainApi";
import JobVacancieModal from "../../components/JobVacancieModal";
import { ModalCandidato } from "../ModalCandidato/ModalCandidato";

const candidates = [{
    name: 'Chandler',
    lastName: 'Bing',
    role: 'Ninguém sabe',
    experienceTime: '1 e 2 meses',
    imageURL: 'https://epipoca.com.br/wp-content/uploads/2020/12/Matthew-Perry.jpg',
    percent: '98%',
},
{
    name: 'Chandler',
    lastName: 'Bing',
    role: 'Office boy',
    experienceTime: '9 meses',
    imageURL: 'https://rollingstone.uol.com.br/media/_versions/chandle-bing-reproducao-imdb_widelg.jpg',
    percent: '98%',
},
{
    name: 'Chandler',
    lastName: 'Bing',
    role: 'Ator',
    experienceTime: '1 ano',
    percent: '98%',
    imageURL: 'https://img.ibxk.com.br/2020/04/23/23162049076588.jpg',
},
{
    name: 'Chandler',
    lastName: 'Bing',
    role: 'Gogo boy',
    experienceTime: '5 meses',
    percent: '98%',
    imageURL: 'https://claudia.abril.com.br/wp-content/uploads/2019/08/chandler.jpg'
},
{
    name: 'Chandler',
    lastName: 'Bing',
    role: 'Ator',
    experienceTime: '1 ano',
    percent: '98%',
    imageURL: 'https://img.ibxk.com.br/2020/04/23/23162049076588.jpg',
},
{
    name: 'Chandler',
    lastName: 'Bing',
    role: 'Gogo boy',
    experienceTime: '5 meses',
    percent: '98%',
    imageURL: 'https://claudia.abril.com.br/wp-content/uploads/2019/08/chandler.jpg'
},
{
    name: 'Chandler',
    lastName: 'Bing',
    role: 'Ninguém sabe',
    experienceTime: '1 e 2 meses',
    imageURL: 'https://epipoca.com.br/wp-content/uploads/2020/12/Matthew-Perry.jpg',
    percent: '98%',
},
{
    name: 'Chandler',
    lastName: 'Bing',
    role: 'Office boy',
    experienceTime: '9 meses',
    imageURL: 'https://rollingstone.uol.com.br/media/_versions/chandle-bing-reproducao-imdb_widelg.jpg',
    percent: '98%',
},
{
    name: 'Chandler',
    lastName: 'Bing',
    role: 'Ator',
    experienceTime: '1 ano',
    percent: '98%',
    imageURL: 'https://img.ibxk.com.br/2020/04/23/23162049076588.jpg',
}]

export const JobVacancieProfile = () => {
    const navigate = useNavigate();
    const { id } = useParams();

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
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showCandidatesModal, setShowCandidatesModal] = useState(false);
    const { authenticated, user, logout } = useContext(AuthContext);
    const [reload, setReload] = useState(false);
    const token = localStorage.getItem('token');

    useLayoutEffect(() => {
        const getJobVacancie = async () => {
            const { data: jv } = await getJobVacancieByID(id);
            setJobVacancie(jv);
            setCompany(jv.company);
        }
        getJobVacancie();
    }, [id]);

    const deleteJobVacancie = async () => {
        try{
            const response = await Api.delete(`/jobVacancie/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            if(response.data === true) {
                notify('Vaga encerrada', 'success')
                navigate('/job-vacancies-list')
            }

        }catch(err){
            const message = err.message.split(' ')
            if(message[message.length - 1] === '401') {
                notify('Desculpe, ocorreu um erro, precisamos que você logue novamente.', 'error');
                logout();
                return;
            }
            if(err) notify(`${err.message}`, 'error');
        }
    }

    if(!authenticated || !user || !token) {
        navigate('/login');
    }

    const needsReload = () => {
        if(reload){
            window.location.reload(true);
            setReload(false);
            window.location.reload(false);
        }
    }

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
                        <S.LabelValueContainer justify="space-between" flow="row wrap">
                        <S.Name>{jobVacancie?.title}</S.Name>
                        <S.LabelValueContainer justify="flex-start">
                            <S.Label>Nível:</S.Label>
                            <S.Value color="#012E40">{levelDescription(jobVacancie?.level)}</S.Value>
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
                                    <S.Label>Contrato</S.Label>
                                    <S.Value>{contractDescription(jobVacancie?.contractType || '')}</S.Value>
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
                            <S.Value>{companyTypeDescription(company?.type)}</S.Value>
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
            <S.Btn onClick={() => setShow(true)}>Encerrar vaga</S.Btn>
            <S.Btn onClick={() => setShowUpdateModal(true)}>Editar vaga</S.Btn>
            {candidates.length && !hide ? (
                <>
                <S.Label color="#023859">Conheça os candidatos!</S.Label>
                <S.PhotoContainer>
                    {candidates.map(({imageURL}, index) => {
                        if(index < 4){
                            return <S.Candidates src={imageURL}/>
                        }
                    })}
                </S.PhotoContainer>
                <S.Btn w="150px" h="22px" bold onClick={() => setShowCandidatesModal(true)}> conhecer candidatos</S.Btn>
                </>
            ) : (<S.Label color="#023859" ws="normal" align="center" w="140px">Nenhum candidato nessa vaga :'(</S.Label>)}
            {hide && (
                    <p>botao</p>
                )
            }
            </S.BtnBox>
            {show && (
                <YesNoModal
                    title="Tem certeza que deseja encerrar esta vaga?"
                    handleClose={() => setShow(false)}
                    open={show}
                    width="330px"
                    height="180px"
                    onYes={() => deleteJobVacancie()}
                />
            )}
            {showUpdateModal && (
                <JobVacancieModal 
                    open={showUpdateModal}
                    setOpen={setShowUpdateModal}
                    jobVacancie={jobVacancie}
                    update={true}
                    successMessage="Vaga atualizada!"
                    companyID={company?.id}
                    setReload={setReload}
                />
            )}
            {showCandidatesModal && (
                <ModalCandidato
                    candidates={candidates}
                    handleClose={() => setShowCandidatesModal(false)}
                    open={showCandidatesModal}
                    title={jobVacancie?.title}
                />
            )}
        </S.Content>
    )

    const bodyCompany = (
        <>
        <CompanyPage>
            {profile}
        </CompanyPage>
        </>
    )

    return(
        <>
        {user?.type === UserTypeEnum.COMPANY ? (bodyCompany) : 'uhu'}
        {needsReload()}
        </>
    )
}