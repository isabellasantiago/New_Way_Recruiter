import Api from "../../../services/mainApi"

export const getJobVacancieList = async (companyId) => {
    const jvList = await Api.get(`/jobVacancie/company/${companyId}`);

    return jvList;
}

export const getAllJobVacanciesByCandidate = async (candidateId) => {
    const data = await Api.get(`/apply/${candidateId}/all`);

    return data;
}

export const getAllJobVacanciesThatMatch = async (candidateId) => {
    const data = await Api.get(`/apply/${candidateId}/possible-match`);

    return data;
}

export const getAllCandidatesByJobVacancie = async () => {
    const data = await Api.get(`/apply/`);

    return data;
}

export const getJobVacancieByID = async (id) => {
    const jobVacancie = await Api.get(`/jobVacancie/${id}`);
    return jobVacancie;
}
