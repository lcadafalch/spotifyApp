import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // saber la ruta activa
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
 
  artista:any ={}                        // variable artista que recibe el objeto de getartista
  topTracks:any = {}  ;               // variable resultante de getTOPtracks

  constructor(private router: ActivatedRoute,                    // servicio de router
                       private spotify:SpotifyService) {          // servicio de Spotify

    this.router.params.subscribe(params => {    // suscribirse a los parametros de la ruta
    
      this.getArtista(params['id'])     // llegar al id del artista
        this.getTopTracks(params["id"])
    });
  }


  getArtista(id:string){  // funcion que llama al id del artista
     
    this.spotify.getArtista(id)     
    .subscribe( artista => {

      console.log(artista)

      this.artista = artista
    })

  }
 
  getTopTracks(id:string){  // funcin que recibe data top tracks
    
    this.spotify.getTopTracks(id)
   
    .subscribe(topTracks =>{
    
      this.topTracks = topTracks;
      
    });
  }

}
