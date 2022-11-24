import Api from "../../../services/mainApi"

export const getResume = async (candidateID) => {
    const resume = await Api.get(`/cv/${candidateID}`);
    return resume;
}