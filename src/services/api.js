import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getProducts = async() => {
    const prosucts = await axios.get(`${BASE_URL}/products`);
    return prosucts.data;
};