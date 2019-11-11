import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // importar los headers x token

//observables

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root' // llamada automatica no es necesario el import 
})
export class SpotifyService {

  constructor(private http: HttpClient) {


    console.log("servicio de spotify")
  }
  getNewReleases() {                                        // petición HTTP de la api de Spotify 

    const headers = new HttpHeaders({                    // enviar los header necesarios
      'Authorization': 'Bearer BQAPjeGkhuZC17mppN4mpQUYW1w_F1FET9k0nC7rsLxFIjQaP8YMY33vZ9YSFaOADy2dzkVSVEOKy-ppnpk'
    });                                        // enviar autorización para tener autenticar token

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }) // enviar headers /*?limit=5*/
    //filtrar info con


  }

  getArtistas(termino: string) {

    const headers = new HttpHeaders({                    // enviar los header necesarios
      'Authorization': 'Bearer BQAPjeGkhuZC17mppN4mpQUYW1w_F1FET9k0nC7rsLxFIjQaP8YMY33vZ9YSFaOADy2dzkVSVEOKy-ppnpk'
    });                                        // enviar autorización para tener autenticar token

    return this.http.get(`https://api.spotify.com/v1/search?type=${termino}&limit=15`, { headers })

    //  peticion get , para buscar a partir de un valor puesto por el usuario
  } 
    getArtista(id:string) {
       
      const headers = new HttpHeaders({     
      'Authorization': 'Bearer BQAPjeGkhuZC17mppN4mpQUYW1w_F1FET9k0nC7rsLxFIjQaP8YMY33vZ9YSFaOADy2dzkVSVEOKy-ppnpk'
    }); 

      return this.http.get(`https://api.spotify.com/v1/artists/${id}`, { headers})


  }

  // peticion get de lo mejor de cada artista

  getTopTracks(id:string) {
       
    const headers = new HttpHeaders({     
    'Authorization': 'Bearer BQAPjeGkhuZC17mppN4mpQUYW1w_F1FET9k0nC7rsLxFIjQaP8YMY33vZ9YSFaOADy2dzkVSVEOKy-ppnpk'
  }); 

    return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`, { headers})


}



}
