import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  signupUser(user: User) {
    return this.http.post("http://localhost:3000/user/signup",user);
  }

  getOtp(mobile:any):Observable<any> {
    return this.http.get("http://localhost:3000/user/verify-mobile/"+mobile)
  }

  verifyMobile(mobile:any) {
    return this.http.get("http://localhost:3000/user/verifymobile/"+mobile);
  }
}
