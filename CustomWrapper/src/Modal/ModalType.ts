export interface User{
    id:number;
    name:string;
    email:string;
    address?:string;
}

export interface ApiResponse<T>{
    data:T;
    message:string;
}