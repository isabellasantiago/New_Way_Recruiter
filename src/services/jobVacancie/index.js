import Api from "../mainApi"

export const getAllJobVacanciesByCompany = async () => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    const data = await Api.get(`/jobVacancie/company/${user.id}`);

    return data
}