import React from 'react';
import * as S from './style';
import PlaceIcon from '@material-ui/icons/Place';

export const Item = ({jobVacancie}) => {

    return(
        <>
            <S.Container>
                <S.Title>{jobVacancie?.title}</S.Title>
                <S.LocalContainer>
                <S.Local>
                    <PlaceIcon style={{color: '#FFF'}} fontSize="small"/>
                    {jobVacancie?.cityAndState}
                </S.Local>
                </S.LocalContainer>
                <S.Salary>{jobVacancie?.salary}</S.Salary>
            </S.Container>

        </>
    )

}