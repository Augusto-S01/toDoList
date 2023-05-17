import axios from 'axios';
import { subTarefa } from '../models/subTarefa';


export function patchSubTaskToDO(subTask:subTarefa,mainId:number):Promise<subTarefa> {

    return axios.patch<subTarefa>('http://localhost:8080/subTask',{
        idMain: mainId,
        id: subTask.id,
        status: "TO_DO"
    },{
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-header": "Origin, X-Requested-With, Content-Type, Accept"
    },
    }).then(response => response.data);
}

export function postSubTask(idMain:number,description:string,deadlineDate:Date):Promise<subTarefa> {
    return axios.post<subTarefa>('http://localhost:8080/subTask',{
        idMain: idMain,
        description: description,
        deadlineDate: deadlineDate,
    },{
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-header": "Origin, X-Requested-With, Content-Type, Accept"
    },
    }).then(response => response.data);
}

export function patchSubTaskInProgress(subTask:subTarefa,mainId:number):Promise<subTarefa> {
    
        return axios.patch<subTarefa>('http://localhost:8080/subTask',{
            idMain: mainId,
            id: subTask.id,
            status: "IN_PROGRESS"
        },{
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-header": "Origin, X-Requested-With, Content-Type, Accept"
        },
        }).then(response => response.data);
}

export function patchSubTaskDone(subTask:subTarefa,mainId:number):Promise<subTarefa> {
        
            return axios.patch<subTarefa>('http://localhost:8080/subTask',{
                idMain: mainId,
                id: subTask.id,
                status: "DONE"
            },{
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    "Access-Control-Allow-header": "Origin, X-Requested-With, Content-Type, Accept"
            },
            }).then(response => response.data);
}

export function deleteSubTask(subId:number,mainId:number) {
    return axios.delete(`http://localhost:8080/subTask/${mainId}/${subId}`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-header": "Origin, X-Requested-With, Content-Type, Accept"
    },
    });
}