import { useState, createContext, useContext } from "react";

const DEFAULT_VALUE = {
    jobVacancie: {
        step: 1,
        title: '',
        salary: 0,
        contractType: 0,
        cityAndState: '',
        about: '',
        level: 0,
        especificGender: false,
        gender: 0,
        especificEthnicity: false,
        ethnicity: 0,
        pcd: false, 
        acceptsAllLevels: false,
        requirements: [],
        benefits: [],
        softSkills: [],
        hardSkills: [],
    },
    setJobVacancie: () => {}
}

const JobVacancieContext = createContext(DEFAULT_VALUE);

export const JobVacancieProvider = ({children}) => {
    const [jobVacancie, setJobVacancie] = useState(DEFAULT_VALUE.jobVacancie);

    const setValues = (values) => {
        setJobVacancie((prevState) => ({
            ...prevState,
            ...values
        }))
    }


    return(
        <JobVacancieContext.Provider
            value={{
                jobVacancie,
                setValues,
            }}
        >
            {children}
        </JobVacancieContext.Provider>
    )
}


export default JobVacancieContext;

export const useJobVacancie = () => useContext(JobVacancieContext)
