import { Component, OnInit } from '@angular/core';
import { SpotifyTokenService } from '../app-services/spotify-token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Albums } from '../model/albums';
import { Tracks } from '../model/tracks';
import { Artists } from '../model/artists';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  album_id : string;
  album: Albums;
  items: Tracks[];
  para;
  constructor(private spotifywebapi: SpotifyTokenService,
              private router: Router,
              private route: ActivatedRoute) { 
                this.route.params.subscribe(param=>{
                  this.album_id = param['id'];
                })
                this.para = {limit: 10, offset:1};
              }

  getAlbum(id: string){
    this.spotifywebapi.getAlbums(id).then(result=>{
      this.album = new Albums(result.id, result.release_date, result.images, result.name);
      console.log(this.album);
    });

    this.spotifywebapi.getAlbumTracks(id, this.para).then(result=>{
      this.items = result.items.map(item=>{
        return new Tracks(item.id,item.name,
                          null,
                          null,
                          item.preview_url)
      })
      console.log(this.items);
    })
  }

  getBack() {
    this.router.navigate(['search']);
  }

  ngOnInit() {
    this.getAlbum(this.album_id);
  }

}
