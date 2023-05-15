import axios, { Axios } from "axios";
import { Tarefa } from "../models/Tarefa";

export function getTasks(): Promise<Tarefa[]> {

    return axios.get<Tarefa[]>('http://localhost:8080/task', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-header": "Origin, X-Requested-With, Content-Type, Accept"
        }
    }).then(response => response.data);

}