import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMsg:boolean=false
  loading:boolean=false
  apiMsg:string=""
  constructor(private _AuthService:AuthService, private _Router:Router) {
   }
  registerForm:FormGroup= new FormGroup({
    'first_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
    age:new FormControl(null,[Validators.required,Validators.min(18),Validators.max(100)])
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
  this.errorMsg=true
  this.loading=true
  if(this.registerForm.status=='VALID'){
    this._AuthService.register(this.registerForm.value).subscribe({
      next:(res)=> {
        if(res.message=="success")
        this._Router.navigate(["/login"])
        else{
          this.apiMsg=res.errors?.email?.message
        }
      },
      complete:()=>{
        this.loading=false
      }
    })
  }
  else{
    this.loading=false
  }
}
}
