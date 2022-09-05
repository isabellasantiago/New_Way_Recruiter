import React from 'react';
import * as S from './style';
import PlaceIcon from '@material-ui/icons/Place';
import { useNavigate } from 'react-router-dom';


export const Item = ({jobVacancie}) => {
    const navigate = useNavigate();



    const handleClick = (id) => {
        navigate(`/job-vacancie/profile/${id}`)
    }

    return(
        <>
            <S.Container onClick={() => handleClick(jobVacancie?.id)}>
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