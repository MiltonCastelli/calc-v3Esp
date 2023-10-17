import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Music } from './models/music';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  musics : Music[] = [];

  constructor(private http:HttpClient) {

  }

  getMusics(): Observable<Music[]>{
    return this.http.get<Music[]>("http://localhost:3000/musics")
  }
}
