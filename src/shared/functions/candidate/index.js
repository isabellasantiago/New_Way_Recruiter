import Api from "../../../services/mainApi"

export const getCandidateById = async (id) => {
    const candidate = await Api.get(`/candidate/${id}`);
    return candidate;
}

export const getResume = async (candidateID) => {
    const resume = await Api.get(`/cv/${candidateID}`);
    return resume;
}