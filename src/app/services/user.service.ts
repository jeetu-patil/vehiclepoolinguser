import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiURL;

  // url="http://localhost:3000/"

  constructor(private http:HttpClient) { }

  signupUser(user: User):Observable<any> {
    return this.http.post(this.apiUrl+"user/signup",user);
    // return this.http.post("http://localhost:3000/user/signup",user);
  }

  checkEmai():Observable<any>{
    return this.http.get(this.apiUrl+"user/allUsers");
  }

  forTesting(Id:any):Observable<any>{
    return this.http.post(this.apiUrl+"bookride/isaccepted",{Id:Id})
  }

  getOtp(mobile:any,userId:any):Observable<any> {
    return this.http.post(this.apiUrl+"user/verify-mobile",{mobile:mobile,userId:userId});
  }

  verifyMobile(mobile:any):Observable<any> {
    return this.http.post(this.apiUrl+"user/verifymobile",{mobile:mobile});
  }

  loginWithGoogle(email:any,name:any):Observable<any>{
    console.log("loginWithGoogle")
    return this.http.post(this.apiUrl+"user/loginwithgoogle",{email:email,name:name});
    // return this.http.post("http://localhost:3000/user/loginwithgoogle",{email:email,name:name});
  }

  getUser():Observable<any>{
    let id=sessionStorage.getItem("userId");
    return this.http.post(this.apiUrl+"user/getuser",{id:id});
  }
  signinUser(email:string,password:string):Observable<any>{
     return this.http.post(this.apiUrl+"user/signin",{email:email,password:password});
  }

  getPublisher(userId:any):Observable<any>{
    return this.http.post(this.apiUrl+"user/getuser",{id:userId});
  }

  addComment(comment:any,id:any):Observable<any>{
    return this.http.post(this.apiUrl+"user/addComment",{feedback:comment,userId:sessionStorage.getItem("userId"),uId:id});
  }
  editNMI(formdata:FormData):Observable<any>{
     return this.http.post(this.apiUrl+"user/edit-profile",formdata)
  }

  forgot(password:any,userId:any):Observable<any>{
    return this.http.post(this.apiUrl+"user/forgot",{password:password,userId:userId});
  }
}
