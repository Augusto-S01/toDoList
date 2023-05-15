import axios, { Axios } from "axios";
import { Tarefas } from "../models/Tarefas";

export function getTasks(): Promise<Tarefas[]> {

    return axios.get<Tarefas[]>('http://localhost:8080/task', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-header": "Origin, X-Requested-With, Content-Type, Accept"
        }
    }).then(response => response.data);

}