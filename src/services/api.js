import axios from "axios";

//// https://rafaelfigueiredo2203.github.io/rafafigueiredo.github.io/Data/candidatos.json

const api = axios.create({
  baseURL: 'https://rafaelfigueiredo2203.github.io/rafafigueiredo.github.io'
});



export default api;
