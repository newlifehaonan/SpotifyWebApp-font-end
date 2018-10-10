import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { TracksComponent } from './tracks/tracks.component';
import { SpotifyTokenService } from './app-services/spotify-token.service';
import { LoginComponent } from './login/login.component'
import { AppRouterModule} from './app-router/app-router.module'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistsComponent,
    AlbumsComponent,
    TracksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule
  ],
  providers: [SpotifyTokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
