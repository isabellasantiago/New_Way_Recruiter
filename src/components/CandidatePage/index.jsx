import React from 'react';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
import { Body } from './style'


export const CandidatePage = ({
    children,
    candidateID,
    setReload = () => {},
}) => {

    return (
        <>
        <Body>
            <HeaderComponent
                candidate={true}
            />
            {children}
        </Body>
        </>
    )
}