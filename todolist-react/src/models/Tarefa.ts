import { Status } from "../enum/status";
import { SubTarefa } from "./SubTarefa";

export interface Tarefa {
    id: number;
    description: string;
    status: Status;
    deadlineDate : Date;
    finishedDate : Date;
    createDate : Date;
    subTasks : SubTarefa[];
}