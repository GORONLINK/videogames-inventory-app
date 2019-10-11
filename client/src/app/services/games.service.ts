import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  apiUri = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
    
  }

  getGames() {
    return this.http.get(`${this.apiUri}/games`);
  }

  getGame(id: string) {
    return this.http.get(`${this.apiUri}/games/${id}`);
  }

  deleteGame(id: string){
    return this.http.delete(`${this.apiUri}/games/${id}`);
  }

  addGame(game: Game) {
    return this.http.post(`${this.apiUri}/games`, game);
  }

  updateGame(id: string|number, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.apiUri}/games/${id}`, updatedGame);
  }
}
