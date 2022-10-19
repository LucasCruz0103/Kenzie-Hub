import { AxiosPromise } from "axios"
import { api } from "./api"
import { iAPIData } from "./getProfile"

export interface iUserLogin {
    email: string,
    password: string
}

interface iLoginData {
    user: iAPIData,
    token: string
}

export function postLogin(data: iUserLogin): AxiosPromise<iLoginData> {
    const response = api.post('sessions', data)

    return response
}