import axios from 'axios';

const baseURL = 'http://localhost:3333'

const authService = {

    async authenticate(data){
        const endpoint =`${baseURL}/login`
        return axios.post(endpoint, data)
    },

    setLoggedUser(data){
        let parseData = JSON.stringify(data);
        localStorage.setItem("user", parseData);
    },

    getLoggedUser(){
        let data = localStorage.getItem("user");
        if(!data) return null;

        try{
            let parsedData = JSON.parse(data);
            return parsedData;
        }catch(err){
            console.log(err)
            return null;
        }
    },

    cleanLoggedUser(){
        localStorage.clear()
    }
}

export default authService;