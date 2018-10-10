import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, ActivatedRoute} from '@angular/router'
import { ArtistsComponent } from '../artists/artists.component';
import { TracksComponent } from '../tracks/tracks.component';
import { SearchComponent } from '../search/search.component';
import { LoginComponent } from '../login/login.component';
import { AlbumsComponent } from '../albums/albums.component';

const routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'artists/:id', component: ArtistsComponent},
  {path: 'tracks/:id', component: TracksComponent},
  {path: 'albums/:id', component: AlbumsComponent},
  {path: 'search', component: SearchComponent},
  {path: 'login', component: LoginComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
