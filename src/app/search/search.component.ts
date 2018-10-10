import { Component, OnInit, Input } from '@angular/core';
import { SpotifyTokenService } from '../app-services/spotify-token.service';
import { Artists } from '../model/artists';
import { Tracks} from '../model/tracks'
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import {Albums} from '../model/albums'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  inputField: string;
  tracks: Tracks[];

  id: string;
  constructor(private spotifywebapi: SpotifyTokenService,
              private router: Router,
              private route: ActivatedRoute){
    this.tracks = [];
    this.inputField = '';

    route.params.subscribe(params =>{
      this.id = params['id'];
    })
  }

  searchTrack() {
    this.spotifywebapi.searchtrack(this.inputField).then(
      result => {
        this.tracks = result.tracks.items.map(item=>{
          return  new Tracks(item.id,
                             item.name, 
                             new Albums(item.album.id, 
                                        item.album.release_date,
                                        item.album.images,
                                        item.album.name),
                             new Artists(item.artists[0].name,
                                         item.artists[0].id),
                                         item.preview_url);
        })
        console.log(this.tracks);
      })
  }

  ngOnInit() {
  }

}
