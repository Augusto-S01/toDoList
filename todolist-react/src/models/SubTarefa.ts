import { Status } from "../enum/status";

export interface subTarefa {
    id: number;
    description: string;
    status: Status;
    deadlineDate : Date;
    finishedDate : Date;
    createDate : Date;
}