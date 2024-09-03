
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions, UseQueryResult, UseMutationResult, QueryClient } from 'react-query';
import { fetchApi } from '../API/fetchData';
import { ApiResponse } from '../Modal/ModalType';

const queryClient = new QueryClient();

export const useGetData = <T>(
    key: string,
    url: string,
    options?: UseQueryOptions<ApiResponse<T>>
): UseQueryResult<ApiResponse<T>> => {
    return useQuery<ApiResponse<T>>(
        key,
        () => fetchApi<T>('get', url),
        options
    );
};

export const usePostData = <T, V>(
    url: string,
    options?: UseMutationOptions<ApiResponse<T>, unknown, V>
): UseMutationResult<ApiResponse<T>, unknown, V> => {
    return useMutation<ApiResponse<T>, unknown, V>(
        (data: V) => fetchApi<T>('post', url, data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries()
            },
            ...options,
        }
    );
};


