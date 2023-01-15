import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = new BehaviorSubject(null)
  constructor(private _HttpClient: HttpClient ,private _router:Router) {
  }
  check() {
    let userToken:any=localStorage.getItem("userToken")
    this.userData.next(userToken)
  }
  register(userData: any): Observable<any> {
    return this._HttpClient.post("https://sticky-note-fe.vercel.app/signup", userData)
  }
  login(userData: any): Observable<any> {
    return this._HttpClient.post("https://sticky-note-fe.vercel.app/signin", userData)
  }
  logout() {
    localStorage.removeItem("userToken")
    this.userData.next(null);
    this._router.navigate(["/login"])
  }
}
