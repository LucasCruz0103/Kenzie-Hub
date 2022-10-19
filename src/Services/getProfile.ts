import { AxiosPromise } from "axios"
import { api } from "./api" 

export interface iTechs {
    id?: string,
    title: string,
    status: string
}

interface iWorks {
    title: string,
    description: string 
}

export interface iAPIData {
    id: string,
    name: string,
    email: string,
    course_module: string,
    bio: string,
    contact: string,
    techs: iTechs[],
    works: iWorks[],
    created_at: string,
    updated_at: string,
    avatar_url: null
}

export default function getProfile(): AxiosPromise<iAPIData> {
    const response = api.get('profile')

    return response
}