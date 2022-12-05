import React, { useState } from 'react';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
import { Body } from './style'
import { ProfileSettings } from '../ProfileSettingsModal';


export const CandidatePage = ({
    children,
    candidateID,
    setReload = () => {},
    bgColor
}) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
        {openModal && (
            <ProfileSettings
                open={openModal}
                handleClose={() => setOpenModal(false)}
                candidateID={candidateID}
            />
        )}
        <Body bgColor={bgColor}>
            <HeaderComponent
                candidate={true}
                setOpenModal={setOpenModal}
            />
            {children}
        </Body>
        </>
    )
}