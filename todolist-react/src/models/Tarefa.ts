import { Status } from "../enum/status";
import { subTarefa } from "./subTarefa";

export interface Tarefa {
    id: number;
    description: string;
    status: Status;
    deadlineDate : Date;
    finishedDate : Date;
    createDate : Date;
    subTasks : subTarefa[];
}