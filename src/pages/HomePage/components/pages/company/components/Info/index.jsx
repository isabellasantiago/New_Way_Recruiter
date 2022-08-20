import React from 'react';
import * as S from './style';


export const Info = ({ title, color, text}) => (
    <S.Container color={color}>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
    </S.Container>
)