import { Component, OnInit } from '@angular/core';
import { Music } from '../models/music';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit{
  musics : Music[] = [];

  ngOnInit(): void {
    this.musics.push({"id":1,"nome": "Baianá" ,"compositor": "Barbatuques", "album":"O seguinte é esse","genero": "Maracatu"});
    this.musics.push({"id":2,"nome": "Suburbia" ,"compositor": "Trombone Shorty", "album":"Hurricane","genero": "New Orleans Funky"});
    this.musics.push({"id":3,"nome": "O Guarani" ,"compositor": "OBMJ", "album":"Orquestra Brasileira de Música Jamaicana","genero": "Ska"});
    this.musics.push({"id":4,"nome": "Caravan" ,"compositor": "Dizzy Gillespie", "album":"Odyssey","genero": "Jazz"});
    this.musics.push({"id":5,"nome": "Funk Brother Soul" ,"compositor": "Gerson King Combo", "album":"Volume II","genero": "Funk"});
  }
}
