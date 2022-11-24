import Api from "../../../services/mainApi"

export const getCandidateById = async (id) => {
    const candidate = await Api.get(`/candidate/${id}`);
    return candidate;
}