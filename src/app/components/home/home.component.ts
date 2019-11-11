import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevasCanciones: any[] = []
  loading: boolean

  constructor(private spotify: SpotifyService) {  // inyecta el spotify service

    this.loading = true;  // muestra el actualizar  si no tengo la data
    this.spotify.getNewReleases()          //llama al servicio
      .subscribe((data: any) => {                //  se suscribe a cualquier dato que pasa dato http no sabemos tipo
        console.log(data.albums.items)
        this.nuevasCanciones = data.albums.items;    // nuevas canciones = Data
        this.loading = false                         // ya  no muestra la data
      })
  }



}
