import React, {useState} from 'react';
import JobVacancieModal from '../../components/JobVacancieModal';
import CompanyPage from '../../components/CompanyPage';


export function FormVaga() {
    const [open, setOpen] = useState(false);

    return (
        <>
        
        <CompanyPage
            setOpen={setOpen}
        />
        </>
    )
}
