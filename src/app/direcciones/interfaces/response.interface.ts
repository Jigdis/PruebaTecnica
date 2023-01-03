import { Direccion } from "./direccion.interface";

export interface Response{
    pageNumber: number;
    pageSize: number;
    succeded: boolean;
    message: string;
    errors: string;
    data: Direccion[];
}