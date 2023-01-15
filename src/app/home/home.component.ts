import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
GamesService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
top3PopGames:any=""
  constructor(private _GamesService:GamesService) { }

  ngOnInit(): void {
    this.getTop3Popgames()
  }
  getTop3Popgames(){
    this._GamesService.getSortedGames("popularity").subscribe({
      next:(res)=> {
        this.top3PopGames=res.slice(0,3)
      },
    })
  }
}
