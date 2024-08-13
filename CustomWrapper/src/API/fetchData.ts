// fetchApi.ts
import axios from 'axios';
import { ApiResponse } from '../Modal/ModalType';

const BASE_URL = 'http://localhost:3000'; // You can set your base URL here

export const fetchApi = async <T>(
    method: 'get' | 'post' | 'put' | 'delete',
    endpoint: string,
    data?:[]
): Promise<ApiResponse<T>> => {
    const url = `${BASE_URL}${endpoint}`;
    try {
        const response = await axios({
            method,
            url,
            data,
        });
        return response.data as ApiResponse<T>;
    } catch (error) {
        throw new Error(`${error} 'Failed to fetch data'`);
    }
};
