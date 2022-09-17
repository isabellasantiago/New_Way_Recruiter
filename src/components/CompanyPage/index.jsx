import React, { useState } from 'react';
import { Body } from '../../components/CompanyPage/style';
import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent';
import { Toaster } from 'react-hot-toast';
import JobVacancieModal from '../JobVacancieModal';


const CompanyPage = ({
    children,
    companyID,
}) => {
    const [openModal, setOpenModal] = useState(false);

    return(
        <>
        {openModal && (
            <JobVacancieModal 
                open={openModal}
                setOpen={setOpenModal}
                companyID={companyID}
            />
        )}
        <Body>
        <HeaderComponent
            candidate={false}
            setOpenModal={setOpenModal}
        />
            {children}
        </Body>
        <Toaster />
        </>
    )
}

export default CompanyPage;