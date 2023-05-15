import { Status } from "../enum/status";

export interface SubTarefas {
    id: number;
    description: string;
    status: Status;
    deadlineDate : Date;
    finishedDate : Date;
    createDate : Date;
}