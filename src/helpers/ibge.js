import axios from "axios";

const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1'

const responseToJson = (response) => response.json();
const sortByLabelAscending = (a, b) => {
    return a.label.localeCompare(b.label, { sensitivity: 'case' });
}


export const parseStates = (states) => {
    return states
    .map((state) => ({label: state.nome, value: state.sigla}))
    .sort(sortByLabelAscending)
}

export const parseCity = (cities) => {
    return cities
    .map((city) => ({label: city.nome, value: city.id}))
    .sort(sortByLabelAscending)
 }

export const fetchStates = async () => {
    const url = `${BASE_URL}/localidades/estados`;
    const { data } = await axios.get(`${url}`)
    return data
}

export const fetchCitiesForState = async (state) => {
    if(!state) return Promise.resolve([]);
    const url = `${BASE_URL}/localidades/estados/${state}/municipios`;
    const { data } = await axios.get(`${url}`)
    return data;
}