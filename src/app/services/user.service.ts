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
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/user/signup",user);
  }

  getOtp(mobile:any,userId:any):Observable<any> {
    return this.http.get("https://ridesharely-backend-api.herokuapp.com/user/verify-mobile/"+mobile+"/"+userId);
  }

  verifyMobile(mobile:any):Observable<any> {
    return this.http.get("https://ridesharely-backend-api.herokuapp.com/user/verifymobile/"+mobile);
  }

  loginWithGoogle(email:any):Observable<any>{
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/user/loginwithgoogle",{email:email});
  }

  getUser():Observable<any>{
    let id=sessionStorage.getItem("userId");
    return this.http.get("https://ridesharely-backend-api.herokuapp.com/user/getuser/"+id);
  }
  signinUser(email:string,password:string):Observable<any>{
     return this.http.post("https://ridesharely-backend-api.herokuapp.com/user/signin",{email:email,password:password});
  }

  getPublisher(userId:any):Observable<any>{
    return this.http.get("https://ridesharely-backend-api.herokuapp.com/user/getuser/"+userId);
  }

  addComment(comment:any,id:any):Observable<any>{
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/user/addComment",{feedback:comment,userId:sessionStorage.getItem("userId"),uId:id});
  }
  editNMI(formdata:FormData):Observable<any>{
     return this.http.post("https://ridesharely-backend-api.herokuapp.com/user/edit-profile",formdata)
  }
}
