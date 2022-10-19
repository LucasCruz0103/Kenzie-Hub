import { AxiosPromise } from "axios"
import { api } from "./api" 
import { iAPIData } from "./getProfile" 

export interface iRegisterData {
    email: string,
    password: string,
    confirmPassword?: string,
    name: string,
    bio: string,
    contact: string,
    course_module: string
}

type iAPIDataOmitted = Omit<iAPIData, 'techs' | 'works'>

export function postRegister(data: iRegisterData): AxiosPromise<iAPIDataOmitted> {
    const response = api.post('users', data)

    return response
}