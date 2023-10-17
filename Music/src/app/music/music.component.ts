import { MusicService } from './../music.service';
import { Music } from './../models/music';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit{
  musics : Music[] = [];

  constructor(private musicService: MusicService){}

  ngOnInit(): void {
    this.musicService.getMusics().subscribe(
      {
        next : musics => this.musics = musics
      }
    )
  }
}
