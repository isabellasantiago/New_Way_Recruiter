import { useState, createContext, useCallback, useEffect } from "react";

const DEFAULT_VALUE = {
    jobVacancie: {
        title: '',
        salary: 0,
        contractType: 0,
        cityAndState: '',
        about: '',
        level: 0,
        gender: 0,
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


    return(
        <JobVacancieContext.Provider
            value={{
                jobVacancie,
                setJobVacancie,
            }}
        >
            {children}
        </JobVacancieContext.Provider>
    )
}


export default JobVacancieContext;
