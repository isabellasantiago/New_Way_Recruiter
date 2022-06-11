import Api from "../../services/mainApi"

export const signin = async (email, password) => {
    const data = await Api.post('/auth/login', {
        email,
        password
    });

    return data;
}