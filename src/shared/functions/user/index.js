import Api from "../../../services/mainApi"
import { UserTypeEnum } from "../../enums/userType.enum";


export const getCurrentUser = async () => {
    const userLoggedIn = JSON.parse(window.localStorage.getItem('user'));
    
    if(userLoggedIn.type === UserTypeEnum.COMPANY){
        const user = await Api.get(`/company/userID/${userLoggedIn.id}`)

        if(!user) throw Error('Not found')

        return user;
    }

    if(userLoggedIn.type === UserTypeEnum.CANDIDATE){
        const user = await Api.get(`/candidate/${userLoggedIn.id}`);

        if(!user) throw Error('Not found')

        return user;
    }

    return null;
}

export const getUserByEmail = async (email) => {
    const { user } = await Api.get("/user/", {
        email,
    })

    return user;
}