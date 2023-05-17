import axios, { Axios } from "axios";
import { Tarefa } from "../models/Tarefa";
import SalvarTarefaDTO  from "../models/salvarTarefaDTO";



export function getTasks(): Promise<Tarefa[]> {

    return axios.get<Tarefa[]>('http://127.0.0.1:8000/task',{
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-header": "Origin, X-Requested-With, Content-Type, Accept"
    },
    }
    ).then(response => response.data);

}


export function postTask(tarefaDto:SalvarTarefaDTO){
    return axios.post<SalvarTarefaDTO>('http://127.0.0.1:8000/task',tarefaDto,{
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-header": "Origin, X-Requested-With, Content-Type, Accept"
    },
    }).then(response => response.data);

}

export function patchToDo(tarefa:Tarefa):Promise<Tarefa> {

    return axios.patch<Tarefa>('http://127.0.0.1:8000/task',{
        id: tarefa.id,
        status: "TO_DO"
    },{
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-header": "Origin, X-Requested-With, Content-Type, Accept"
    },
    }).then(response => response.data);
}

export function patchInProgress(tarefa:Tarefa):Promise<Tarefa> {

    return axios.patch<Tarefa>('http://127.0.0.1:8000/task',{
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

    return axios.patch<Tarefa>('http://127.0.0.1:8000/task',{
        id: tarefa.id,
        status: "DONE"
    },{
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-header": "Origin, X-Requested-With, Content-Type, Accept"
    },
    }).then(response => response.data);
}

export function atualizaTarefa(tarefaDto:SalvarTarefaDTO){
    return axios.patch<SalvarTarefaDTO>('http://127.0.0.1:8000/task',tarefaDto,{
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-header": "Origin, X-Requested-With, Content-Type, Accept"
    },
    }).then(response => response.data);

    
}

export function deleteTask(id:number) {
    return axios.delete(`http://127.0.0.1:8000/task/${id}`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-header": "Origin, X-Requested-With, Content-Type, Accept"
    },
    });
}