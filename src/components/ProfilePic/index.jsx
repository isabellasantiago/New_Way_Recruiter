import React from "react";
import { Profile } from './style'

export const ProfilePic = ({
    size,
    bgColor,
    link,
    border,
    left
}) => {

    return (
        <>
            <Profile 
                src={link}
                size={size}
                border={border}
                left={left}
                bgColor={bgColor}
            />
        </>
    )
}