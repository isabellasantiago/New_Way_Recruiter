import React, { useState, useEffect, useRef } from 'react';
import * as S from './style';
import CompanyPage from '../../components/CompanyPage';
import { isEqual }  from 'lodash';
import { getCurrentUser } from '../../shared/functions/user';
import { HeaderCompanyPage } from '../../components/HeaderCompanyPage';
import { getJobVacancieList } from '../../shared/functions/jobVacancie';
import { Item } from './components/JobVacancie';

export const JobVacanciesList = () => {
    const [company, setCompany] = useState();
    const [list, setList] = useState([]);
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [reload, setReload] = useState(false);
    const companyRef = useRef();


    useEffect(() => {
        const updateCompany = !isEqual(companyRef.current, company);
        if(updateCompany) {
            companyRef.current = company;
            setShouldUpdate(value => !value);
        }
    }, [company]);

    useEffect(() => {
        const companyValues = companyRef?.current;
        if(!companyValues) return;

        setCompany(companyValues);
    },[shouldUpdate]);

    useEffect(() => {
        const getUser = async () => {
            const user = await getCurrentUser();
            setCompany(user.data)
        }
        getUser();
    }, [])

    const needsReload = () => {
        if(reload){
            window.location.reload(true);
            setReload(false);
            window.location.reload(false);
        }
    }

    useEffect(() => {
        const getList = async () => {
            const jobVacancies = await getJobVacancieList(company?.id);
            setList(jobVacancies.data);
        }
        getList();
    }, [company?.id])


    return(
        <>
            <CompanyPage
                companyID={company?.id}
            >
                <HeaderCompanyPage 
                    cover={company?.cover}
                    corporateName={company?.corporateName}
                    photo={company?.photo}
                />
                <S.Container>
                    <S.Content>
                        {list?.length > 0 && (
                            list?.map(jv => (
                                <Item
                                key={jv.id}
                                    jobVacancie={jv}
                                    company={company}
                                />
                            ))
                        )}

                    </S.Content>
                </S.Container>

            </CompanyPage>
            {needsReload()}
        </>
    )
}