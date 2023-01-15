import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loading:boolean=false
errorMsg:string=""
  constructor(private _AuthService:AuthService, private _Router:Router) { }
  loginForm:FormGroup= new FormGroup({
    email:new FormControl(null),
    password:new FormControl(null),
  })
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:()=>{
        if(this._AuthService.userData.getValue()!==null){
          this._Router.navigate(["/home"])
      }
      }
    })
  }
sendData(){
  this.loading=true
  this._AuthService.login(this.loginForm.value).subscribe({
    next:(res)=> {
    this.errorMsg=res.message
    if(res.message=="success"){
      this._Router.navigate(["/home"])
      localStorage.setItem("userToken",res.token)
      this._AuthService.check()
    }
    },
    error:()=>{
 this.loading=false
    },
    complete:()=>{
      this.loading=false
    }
  })
}
forgetPassword(){
alert("Not working now check back later")
}
}
