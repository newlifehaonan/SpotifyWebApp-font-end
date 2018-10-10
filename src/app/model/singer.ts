import { Photo } from "./photo";

export class Singer {
    name: string;
    img: Photo[];
    popularity: number;
    genres: string[];

    constructor(name: string, img: Photo[],popularity: number,genres: string[]) {
        this.name = name;
        this.img =img;
        this.genres = genres;
        this.popularity = popularity;
    }
}