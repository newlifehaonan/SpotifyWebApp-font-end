import { Injectable } from '@angular/core';
import Spotify from "spotify-web-api-js";
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SpotifyTokenService {

  private params;
  private spotifywebapi;

  constructor(private httprequest: HttpClient ){
    this.spotifywebapi = new Spotify();
    this.params = this.getHashParams();
    if(this.params.access_token){
      this.spotifywebapi.setAccessToken(this.params.access_token);
    }
  }

  private getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }


  searchtrack(name: string) {
    return this.spotifywebapi.searchTracks(name);
  }

  getArtists(id:string){
    return this.spotifywebapi.getArtist(id);
  }

  getAlbums(id:string) {
    return this.spotifywebapi.getAlbum(id);
  }

  getTracks(id: string) {
    return this.spotifywebapi.getTrack(id);
  }

  getAlbumTracks(id: string, para) {
    return this.spotifywebapi.getAlbumTracks(id, para);
  }
}
