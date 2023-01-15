import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  loading:boolean=true
  max: any = ""
  allGames: any = ""
  GamesByCategory:any=""
  getmore:number=20
  constructor(private _GamesService:GamesService,private _ActivatedRoute:ActivatedRoute) {
   }
  platform:any=this._ActivatedRoute.snapshot.routeConfig?.path
  ngOnInit(): void {
    
   this.getGamesByCategory()
  }
  getGamesByCategory(){
    this._GamesService.getGamesByCategory(this.platform).subscribe({
      next:(res)=> {
        this.GamesByCategory=res
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
