import { Modal } from '@material-ui/core';
import React from 'react';
import { Section } from './style'


export const ModalBase = ({ open, handleClose, children, width, height }) => {
    return(
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby='simple-modal-description'
            >
                <Section width={width} height={height}>
                {children}
                </Section>
            </Modal>
        </>
    )
}