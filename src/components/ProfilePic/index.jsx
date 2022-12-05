import React from "react";
import { Profile } from './style'

export const ProfilePic = ({
    size,
    bgColor,
    link,
    border,
    left
}) => {
    const pic = link ? link : 'https://www.promoview.com.br/uploads/images/unnamed%2819%29.png'

    return (
        <>
            <Profile 
                src={pic}
                size={size}
                border={border}
                left={left}
                bgColor={bgColor}
            />
        </>
    )
}