import { useGetData,usePostData } from '../ServerStateManager/ServerState';
import { User } from '../Modal/ModalType';


export const useUsers = () => {
    const { data, error, isLoading } = useGetData<User[]>('users', '/users');
    return { data, error, isLoading };
};


export const useAddUser = () => {
    const mutation = usePostData<User, User>('/users');
    return mutation;
};


