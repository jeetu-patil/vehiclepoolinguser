import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  signupUser(user: User):Observable<any> {
    return this.http.post("http://localhost:3000/user/signup",user);
  }

  getOtp(mobile:any,userId:any):Observable<any> {
    return this.http.get("http://localhost:3000/user/verify-mobile/"+mobile+"/"+userId);
  }

  verifyMobile(mobile:any) {
    return this.http.get("http://localhost:3000/user/verifymobile/"+mobile);
  }

  loginWithGoogle(email:any):Observable<any>{
    return this.http.post("http://localhost:3000/user/loginwithgoogle",{email:email});
  }

  getUser():Observable<any>{
    let id=sessionStorage.getItem("userId");
    return this.http.get("http://localhost:3000/user/getuser/"+id);
  }
  signinUser(email:string,password:string):Observable<any>{
     return this.http.post("http://localhost:3000/user/signin",{email:email,password:password});
  }

  getPublisher(userId:any){
    return this.http.get("http://localhost:3000/user/getuser/"+userId);
  }

}
