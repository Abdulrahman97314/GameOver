import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  loading:boolean=true
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay:true,
    autoplayTimeout:2000,
    navSpeed: 600,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }
gameDetails:any=""
  constructor(private _ActivatedRoute:ActivatedRoute,private _GamesService:GamesService ) { }

  ngOnInit(): void {
   let {id}:any=this._ActivatedRoute.snapshot.params
   this._GamesService.getGameDetails(id).subscribe({
    next:(value)=> {
      this.gameDetails=value
    },
    complete:()=>{
      this.loading=false
     }
   })
  }

}
