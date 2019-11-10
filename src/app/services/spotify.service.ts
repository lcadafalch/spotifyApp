import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // importar los headers x token

@Injectable({
  providedIn: 'root' // llamada automatica no es necesario el import 
})
export class SpotifyService {

  constructor( private http:HttpClient) { 
    

    console.log("servicio de spotify")
  }
  getNewReleases(){                                        // petición HTTP de la api de Spotify 
    
    const headers = new HttpHeaders ({                    // enviar los header necesarios
    'Authorization': 'Bearer BQB4HQjQkANylmjamKrCT8ZJJW6vZhakIAMrK9ERwK1_9qSXrJOAuBzX_Gkda5aKPa-Y4dU38Tm44Y4apLM'
    });                                        // enviar autorización para tener autenticar token

   return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}) // enviar headers /*?limit=5*/
   
  }
}
