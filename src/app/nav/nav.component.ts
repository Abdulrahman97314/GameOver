import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
userIslogged:boolean=false
  constructor(private _AuthService:AuthService) {
    if(localStorage.getItem("userToken")!==null){
      _AuthService.check()
    } 
  }
  ngOnInit(): void {
      this._AuthService.userData.subscribe({
        next:()=>{
          if(this._AuthService.userData.getValue()!==null){
          this.userIslogged=true
        }
        else{
          this.userIslogged=false
        }
        }
      })
  } 


logout(){
  this._AuthService.logout()
}


}
