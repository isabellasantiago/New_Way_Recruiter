import React, { useState } from 'react';
import { Container, ContentRoot, DropDown, Option, Btn } from './style'


export const JobVacancieDropDown = ({
    setOpenModal
}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen((prev) => !prev);
    };
  
    const handleClickAway = () => {
      setOpen(false);
    };

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
                        <Option>Visualizar vaga</Option>
                        <Option onClick={() => setOpenModal(true)}>Cadastrar vaga</Option>
                    </DropDown>
                ) : null}
            </ContentRoot>

        </Container>
    )
}