import React, { useEffect, useState, useLayoutEffect } from "react";
import CompanyPage from '../../components/CompanyPage';
import { UserTypeEnum } from "../../shared/enums/userType.enum";
import { getCurrentUser } from "../../shared/functions/user";



export const JobVacancieProfile = ({jobVacancie}) => {
    const [currentUser, setCurrentUser] = useState();
    const [hide, setHide] = useState(false);

    useLayoutEffect(() => {
        const getUser = async () => {
            const { data: user } = await getCurrentUser();
            if(user.type === UserTypeEnum.CANDIDATE) setHide(value =>!value);
            setCurrentUser(user);

        }
        getUser();
    },[])

    return(
        <>
        <CompanyPage>

        </CompanyPage>
        </>
    )
}