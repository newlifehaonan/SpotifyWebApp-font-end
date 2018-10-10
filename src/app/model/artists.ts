import { Photo } from "./photo";

export class Artists {
    name: string;
    id: string;

    constructor(name: string, id: string) {
        this.id = id;
        this.name = name;
    }
}