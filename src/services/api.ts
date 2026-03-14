import axios from "axios";
import type { CmvData, GroupData, ProductData } from "../types";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
});

export const getCmv = async (): Promise<CmvData[]> => {
    const response = await api.get<CmvData[]>("/cmv");

    return response.data;
};

export const getGroups = async (): Promise<GroupData[]> => {
    const response = await api.get<GroupData[]>("/groups");

    return response.data;
};

export const getProducts = async (): Promise<ProductData[]> => {
    const response = await api.get<ProductData[]>("/products");

    return response.data;
};
