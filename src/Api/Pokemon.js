import { API_HOST } from "../Utils/constants";

export const getPokemonApi = async (endpoinUrl) => {
    console.log(endpoinUrl);
    try {
        const url = `${API_HOST}pokemon?limit=20&offset=0`;
        const response = await fetch(endpoinUrl || url);
        return await response.json();
    } catch (error) {
        throw error;
    }
};
export const getPokemonDetailsByUrlApi = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getPokemonsDetailsApi = async (id) => {
    try {
        const url = `${API_HOST}pokemon/${id}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw error;
    }
};
