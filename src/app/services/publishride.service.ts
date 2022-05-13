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

  addPublisherDetails(formData:any) :Observable<any>{
    return this.http.post("http://localhost:3000/publishride/firstpublishride",formData);
  }

  submitPublisherDetail(fromId:any,toId:any,message:any,date:any,d:any,amount:any,seat:any,time:any){
    let id=sessionStorage.getItem("userId");
    return this.http.post("http://localhost:3000/publishride/publishride",{fromId:fromId,toId:toId,msgForBooker:message,publisherId:id,rideDate:date,rideTime:time,seatAvailable:seat,distance:d,amountPerPerson:amount,totalAmount:amount});
  }

  getParticularRideDetail(id:any){
    return this.http.get("http://localhost:3000/publishride/particualride/"+id);
  }

  getRidesOfBooker(from:any,to:any, date:any,seat:any):Observable<any>{
    return this.http.post("http://localhost:3000/publishride/ridesforbooker",{to:to,date:date,from:from,seat:seat});
  }


  bookRide(seat:any,publisherId:any){
    return this.http.post("http://localhost:3000/bookride/book",{seat:seat,bookerId:sessionStorage.getItem("userId"),publisherId:publisherId});
  }

  requestToThePublisher(publisherId:any){
    return this.http.post("http://localhost:3000/publishride/requestforpublisher",{bookerId:sessionStorage.getItem("userId"),publisherId:publisherId});
  }



  getAllRequests(rideId:any):Observable<any>{
    return this.http.get("http://localhost:3000/publishride/showrequesttopublisher/"+sessionStorage.getItem("userId")+"/"+rideId);
  }


  getPublishRides():Observable<any>{
    return this.http.get("http://localhost:3000/publishride/getPublishRidesOfSingle/"+sessionStorage.getItem("userId"));
  }
}
