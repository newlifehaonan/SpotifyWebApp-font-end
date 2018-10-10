import { Photo } from "./photo";
import { Albums } from "./albums";
import { Artists } from "./artists";

export class Tracks {
    id: string;
    track_name: string;
    artists: Artists;
    albums: Albums;
    preview_url: string;
    
    constructor(id: string, track_name: string, albums: Albums, artists: Artists, preview_url: string){
        this.track_name = track_name;
        this.artists = artists;
        this.id = id;
        this.albums = albums;
        this.preview_url = preview_url;
    }
}