import { Component, OnInit } from '@angular/core';
import { SpotifyTokenService } from '../app-services/spotify-token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Artists } from '../model/artists';
import { Singer } from '../model/singer';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artists_id: string;
  artists: Singer;

  constructor(private spotifywebapi: SpotifyTokenService,
              private router: Router,
              private route: ActivatedRoute){ 

                this.route.params.subscribe(param=>{
                  this.artists_id = param['id'];
                })
  }

  getArtist(id: string) {
    this.spotifywebapi.getArtists(id).then(
      result=>{
        this.artists = new Singer(result.name, result.images, result.popularity, result.genres);
        console.log(this.artists);
      }
    )
  }

  getBack() {
    this.router.navigate(['search']);
  }
  ngOnInit() {
    this.getArtist(this.artists_id);
  }

}
