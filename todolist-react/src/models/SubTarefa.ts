import { Status } from "../enum/status";

export interface SubTarefa {
    id: number;
    description: string;
    status: Status;
    deadlineDate : Date;
    finishedDate : Date;
    createDate : Date;
}