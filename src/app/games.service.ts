import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor(private _HttpClient: HttpClient) { }
  headers = {
    'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
  getGameDetails(id: number): Observable<any> {
    return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/game", {
      headers: this.headers,
      params: { "id": id }
    })
  }
  getAllGames(): Observable<any> {
    return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: this.headers
    })
  }
  getGamesByCategory(category: string): Observable<any> {
    return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games",
      {
        params: { category: category },
        headers: this.headers
      })
  }
  getGamesByPlatform(Platforms: string): Observable<any> {
    return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: this.headers,
      params: { "platform": Platforms }
    })
  }
  getSortedGames(sortby: string): Observable<any> {
    return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      params: { "sort-by": sortby },
      headers: this.headers
    })
  }
}
