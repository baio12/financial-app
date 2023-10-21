import apiClient from '../index';

export const getPokemons = async () => {
    const response = await apiClient.get('/api/pokemons');
    return response.data;
}