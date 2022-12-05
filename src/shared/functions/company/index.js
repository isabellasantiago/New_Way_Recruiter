import Api from "../../../services/mainApi"

export const getCompany = async (companyID) => {
    const data = await Api.get(`/company/${companyID}`);

    return data;
}