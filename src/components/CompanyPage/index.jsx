import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { Body, ButtonContainer } from '../../components/CompanyPage/style';
import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent';
import { Toaster } from 'react-hot-toast';
import JobVacancieModal from '../JobVacancieModal';


const CompanyPage = ({
    children,
    setOpen
}) => {
    const [openModal, setOpenModal] = useState(false);

    return(
        <>
        {openModal && (
            <JobVacancieModal 
                open={openModal}
                setOpen={setOpenModal}
            />
        )}
        <Body>
        <HeaderComponent
            candidate={false}
            setOpenModal={setOpenModal}
        />
        <ButtonContainer>
            <Button onClick={() => setOpen(true)}>
                Cadastrar vaga
            </Button>
        </ButtonContainer>
            {children}
        </Body>
        <Toaster />
        </>
    )
}

export default CompanyPage;