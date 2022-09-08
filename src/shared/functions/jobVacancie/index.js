import Api from "../../../services/mainApi"

export const getJobVacancieList = async (companyId) => {
    const jvList = await Api.get(`/jobVacancie/company/${companyId}`);

    return jvList;
}


export const getJobVacancieByID = async (id) => {
    const jobVacancie = await Api.get(`/jobVacancie/${id}`);
    return jobVacancie;
}