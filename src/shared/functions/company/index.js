import Api from "../../../services/mainApi"

export const getJobVacancieList = async (companyId) => {
    const jvList = await Api.get(`/jobVacancie/company/${companyId}`);

    return jvList;
}
