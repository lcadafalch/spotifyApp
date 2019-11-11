import { Component, OnInit, Input } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent  {

  @Input() items:any[] = [];  //recibo  de Items

  constructor(private router:Router) { } // control para hacer redirecciones

 verArtista(item:any){        //funcion verArtista

   let artistaId;
   if(item.type === "artist"){  //Busca dentro del array si hay algún artista.Id en item
     artistaId = item.id;

   }else{
     artistaId=item.artists[0].id // Sino esta dentro de artist
     console.log(artistaId)
   }

   this.router.navigate(['/artist', artistaId]) // Busqueda del Id del artista
  
 }

}
