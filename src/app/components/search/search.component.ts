import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  artistas: any[] = [];

  constructor(private spotify:SpotifyService) { }

  buscar(termino:string){ // busca el artista relacionado 
     console.log(termino)

     this.spotify.getArtistas(termino) // recibe la data 
      .subscribe((data:any) =>{
        console.log(data.artists.items); // recibe datos de la artistas buscados
        this.artistas = data.artists.item; // lo metemos todo en la var artustas
      })
  }

  

}
