import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ContentRoot, DropDown, Option, Btn } from './style'


export const JobVacancieDropDown = ({
    setOpenModal
}) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
      setOpen((prev) => !prev);
    };
  
    const handleClickAway = () => {
      setOpen(false);
    };

    const handleJobVacaciesList = () => {
        navigate('/job-vacancies-list');
    }

    return(
        <Container
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={handleClickAway}
        >
            <ContentRoot>
                <Btn onClick={handleClick}>Vagas</Btn>
                {open ? (
                    <DropDown>
                        <Option onClick={handleJobVacaciesList}>Visualizar vaga</Option>
                        <Option onClick={() => setOpenModal(true)}>Cadastrar vaga</Option>
                    </DropDown>
                ) : null}
            </ContentRoot>

        </Container>
    )
}