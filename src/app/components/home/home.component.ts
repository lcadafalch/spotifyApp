import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



  constructor(private spotify: SpotifyService) {  // inyecta el spotify service

    this.spotify.getNewReleases()
  }



}
