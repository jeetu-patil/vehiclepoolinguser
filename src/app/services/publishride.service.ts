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

  addPublisherDetails(formData:any):Observable<any>{
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


  bookRide(seat:any,rideId:any):Observable<any>{
    return this.http.post("http://localhost:3000/bookride/book",{seat:seat,bookerId:sessionStorage.getItem("userId"),rideId:rideId});
  }

  requestToThePublisher(rideId:any,bookRideId:any):Observable<any>{
    return this.http.post("http://localhost:3000/publishride/requestforpublisher",{bookerId:sessionStorage.getItem("userId"),rideId:rideId,bookRideId:bookRideId});
  }
  


  getAllRequests(rideId:any):Observable<any>{
    return this.http.get("http://localhost:3000/publishride/showrequesttopublisher/"+sessionStorage.getItem("userId")+"/"+rideId);
  }


  getPublishRides():Observable<any>{
    return this.http.get("http://localhost:3000/publishride/getPublishRidesOfSingle/"+sessionStorage.getItem("userId"));
  }

  getAllBookRides():Observable<any>{
    return this.http.get("http://localhost:3000/bookride/getbookrides/"+sessionStorage.getItem("userId"));
  }


  acceptRequest(bookerId:any,rideId:any,bookRideId:any){
    return this.http.get("http://localhost:3000/publishride/acceptrequestofbooker/"+bookerId+"/"+sessionStorage.getItem("userId")
    +"/"+rideId+"/"+bookRideId);
  }

  checkConfirmBoooker(rideId:any):Observable<any>{
    return this.http.get("http://localhost:3000/publishride/showallacceptrequestbypublisher/"+sessionStorage.getItem("userId")+"/"+rideId);
  }


  matchOtp(otp:any,id:any,rideId:any):Observable<any>{
    return this.http.post("http://localhost:3000/publishride/matchotp",{otp:otp,publisherId:sessionStorage.getItem("userId"),id:id,rideId:rideId});
  }


  getAllBookRidesHistory(){
    return this.http.get("http://localhost:3000/bookerhistory/viewbookerhistory/"+sessionStorage.getItem("userId"));
  }

  getAllpublishHistory(){
    return this.http.get("http://localhost:3000/publisherhistory/publishhistiry/"+sessionStorage.getItem("userId"));
  }

  getAllUserOfPublishHistory(rideId:any){
    return this.http.get("http://localhost:3000/publisherhistory/viewpublisherhistory/"+rideId);
  }

  declineRequest(bookerId:any,rideId:any){
    return this.http.get("http://localhost:3000/publishride/declinerequestofbooker/"+bookerId+"/"+sessionStorage.getItem("userId")+"/"+rideId);
  }

  cancelRide(rideId:any):Observable<any>{
    return this.http.get("http://localhost:3000/publishride/cancellride/"+sessionStorage.getItem("userId")+"/"+rideId);
  }


  cancelRideByBooker(publisherId:any,rideId:any,bookRideId:any):Observable<any>{
      return this.http.get("http://localhost:3000/publishride/cancelridebybooker/"+sessionStorage.getItem("userId")+"/"+rideId+"/"+publisherId+"/"+bookRideId);
  }
}
