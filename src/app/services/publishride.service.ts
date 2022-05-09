import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publishride } from '../model/publishride';

@Injectable({
  providedIn: 'root'
})
export class PublishrideService {

  constructor(private http:HttpClient) { }

  getAllPublishRides():Observable<Publishride>{
    return this.http.get<Publishride>("http://localhost:3000/publishride/publisherforuser");
  }

  getDetailOfPubliisher():Observable<any>{
    return this.http.get<any>("http://localhost:3000/publishride/checkuserride/"+sessionStorage.getItem("userId"));
  }

  addPublisherDetails(formData:FormData) {
    return this.http.post<any>("http://localhost:3000/publishride/firstpublishride",formData);
  }

  submitDetail(from:any,to:any,message:any,time:any,date:any){
    return this.http.post<any>("http://localhost:3000/publishride/publishride",{})
  }
}
