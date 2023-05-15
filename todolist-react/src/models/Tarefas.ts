import { Status } from "../enum/status";
import { SubTarefas } from "./SubTarefas";

export interface Tarefas {
    id: number;
    description: string;
    status: Status;
    deadlineDate : Date;
    finishedDate : Date;
    createDate : Date;
    subTasks : SubTarefas[];
}