import { Photo } from "./photo";

export class Albums{
    id: string;
    release_date: string;
    img: Photo[];
    album_name :string;
    constructor(id: string,release_date: string,img: Photo[], album_name :string) {
        this.id = id;
        this.release_date = release_date;
        this.img = img;
        this.album_name = album_name;
    }
}