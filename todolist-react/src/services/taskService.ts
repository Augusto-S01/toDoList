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

export function patchInProgress(tarefa:Tarefa):Promise<Tarefa> {

    return axios.patch<Tarefa>('http://localhost:8080/task',{
        id: tarefa.id,
        status: "IN_PROGRESS"
    },{
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-header": "Origin, X-Requested-With, Content-Type, Accept"
    },
    }).then(response => response.data);
}


export function patchDone(tarefa:Tarefa):Promise<Tarefa> {

    return axios.patch<Tarefa>('http://localhost:8080/task',{
        id: tarefa.id,
        status: "DONE"
    },{
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-header": "Origin, X-Requested-With, Content-Type, Accept"
    },
    }).then(response => response.data);
}
