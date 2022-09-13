import React from 'react';
import { ModalBase } from '../Modal';
import * as S from './style';

export const YesNoModal = ({
    yesText,
    noText,
    title,
    description,
    open,
    handleClose,
    width,
    height,
    onYes,
}) => {

    return (
        <ModalBase
            open={open}
            handleClose={handleClose}
            width={width}
            height={height}
        >
            <S.Container>
                <S.Title>{title}</S.Title>
                { description && (
                    <S.Description>{description}</S.Description>
                )}
                <S.YesNoContainer>
                    <S.YesNoBtn
                        onClick={onYes}
                    >
                        {yesText || 'Sim'}
                    </S.YesNoBtn>
                <S.YesNoBtn
                    bgColor="#012e41"
                    color="#fff"
                    onClick={handleClose}
                >
                    {noText || 'Não'}
                </S.YesNoBtn>
                </S.YesNoContainer>
            </S.Container>                    
        </ModalBase>
    )

}