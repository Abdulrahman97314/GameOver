import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {
  loading:boolean=true
  max: any = ""
  allGames: any = ""
  GamesSortedBy:any=""
  getmore:number=20
  constructor(private _GamesService:GamesService,private _ActivatedRoute:ActivatedRoute) {
   }
  platform:any=this._ActivatedRoute.snapshot.routeConfig?.path
  ngOnInit(): void {
    
   this.getSortedByGames()
  }
  getSortedByGames(){
    this._GamesService.getSortedGames(this.platform).subscribe({
      next:(res)=> {
        this.GamesSortedBy=res
        this.max =Array.from(res).length
      },
      complete:()=>{
       this.loading=false
      }
    })
  }
  getMoreGames(){
    this.getmore=this.getmore+20
  }

}
