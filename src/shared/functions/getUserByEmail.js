import Api from '../../services/mainApi.js'

export const getUserByEmail = async (email) => {
    const { user } = await Api.get("/user/", {
        email,
    })

    return user;
}