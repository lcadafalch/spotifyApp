import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Import de Module
import{RouterModule} from '@angular/router';

//import de Modulo de Language
import{HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';

//IMPORTAR ROUTES
import{ROUTES} from './app.routes'

//services
import{SpotifyService} from './services/spotify.service' // importa el servicio de spoty

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,                         // importar el Modulo Http
    RouterModule.forRoot(ROUTES ,{useHash:true}) //importar el  routermodule

  ],
  providers: [SpotifyService],                 // importa el SpotifyService
  bootstrap: [AppComponent]
})
export class AppModule { }
