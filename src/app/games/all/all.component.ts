import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  loading:boolean=true
  max: any = ""
  allGames:any =""
  getmore: number = 20
  constructor(private _GamesService: GamesService) { }

  ngOnInit(): void {
    this.getAllGames()
    
  }
  getAllGames() {
    this._GamesService.getAllGames().subscribe({
      next: (res) => {
        this.allGames = res
        this.max =Array.from(res).length
      },
      complete:()=>{
        this.loading=false
       }
    })
  }
  getMoreGames() {
      this.getmore = this.getmore + 20
    }
}
