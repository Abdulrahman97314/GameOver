import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  loading:boolean=true
  max: any = ""
  allGames: any = ""
  GamesByPlatform:any=""
  getmore:number=20
  constructor(private _GamesService:GamesService,private _ActivatedRoute:ActivatedRoute) {
   }
  platform:any=this._ActivatedRoute.snapshot.routeConfig?.path
  ngOnInit(): void {
    
   this.getGamesByPlatform()
  }
  getGamesByPlatform(){
    this._GamesService.getGamesByPlatform(this.platform).subscribe({
      next:(res)=> {
        this.GamesByPlatform=res
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
