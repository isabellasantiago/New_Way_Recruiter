import Api from "../mainApi"

export const getCurrentUser = async () => {
    const userLoggedIn = window.localStorage.getItem('user');
    if(userLoggedIn.type === 'company'){
        const user = await Api.get(`/company/${userLoggedIn.id}`)

        if(!user) throw Error('Not found')

        return user;
    }

    if(userLoggedIn.type === 'candidate'){
        const user = await Api.get(`/candidate/${userLoggedIn.id}`);

        if(!user) throw Error('Not found')

        return user;
    }
}