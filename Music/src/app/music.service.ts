import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Music } from './models/music';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  musics : Music[] = [];
  baseUrl: string = "http://localhost:3000/musics";

  constructor(private http:HttpClient) {

  }

  getMusics(): Observable<Music[]>{
    return this.http.get<Music[]>(this.baseUrl)
  }

  save(music:Music) : Observable<Music>{
    return this.http.post<Music>(this.baseUrl, music)
  }
}
