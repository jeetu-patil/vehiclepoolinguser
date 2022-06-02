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
    // return this.http.post("https://ridesharely-backend-api.herokuapp.com/user/signup",user);
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/user/signup",user);
  }
  
  checkEmai():Observable<any>{
    return this.http.get("http://localhost:3000/user/allUsers");
  }

  forTesting(Id:any):Observable<any>{
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/bookride/isaccepted",{Id:Id})
  }

  getOtp(mobile:any,userId:any):Observable<any> {
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/user/verify-mobile",{mobile:mobile,userId:userId});
  }

  verifyMobile(mobile:any):Observable<any> {
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/user/verifymobile",{mobile:mobile});
  }

  loginWithGoogle(email:any,name:any):Observable<any>{
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/user/loginwithgoogle",{email:email,name:name});
  }

  getUser():Observable<any>{
    let id=sessionStorage.getItem("userId");
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/user/getuser",{id:id});
  }
  signinUser(email:string,password:string):Observable<any>{
     return this.http.post("https://ridesharely-backend-api.herokuapp.com/user/signin",{email:email,password:password});
  }

  getPublisher(userId:any):Observable<any>{
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/user/getuser",{id:userId});
  }

  addComment(comment:any,id:any):Observable<any>{
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/user/addComment",{feedback:comment,userId:sessionStorage.getItem("userId"),uId:id});
  }
  editNMI(formdata:FormData):Observable<any>{
     return this.http.post("https://ridesharely-backend-api.herokuapp.com/user/edit-profile",formdata)
  }
}
