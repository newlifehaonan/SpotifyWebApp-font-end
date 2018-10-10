import { Component, OnInit } from '@angular/core';
import { SpotifyTokenService } from '../app-services/spotify-token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Tracks } from '../model/tracks';
import { Albums } from '../model/albums';
import { Artists } from '../model/artists';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  track_id : string;
  track: Tracks;

  constructor(private spotifywebapi: SpotifyTokenService,
              private router: Router,
              private route: ActivatedRoute) {
                this.route.params.subscribe(param=>{
                  this.track_id = param['id'];
                })
               }

  getTrack(id: string){
    this.spotifywebapi.getTracks(id).then(result=>{
      console.log(result);
      this.track = new Tracks(result.id, result.name, new Albums(result.album.id,result.album.release_date, result.album.images, result.album.name), new Artists(result.artists[0].name, result.artists[0].id), result.preview_url)
      console.log(this.track);
    })
  }

  getBack() {
    this.router.navigate(['search']);
  }

  ngOnInit() {
    this.getTrack(this.track_id);
  }

}
