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
    return this.http.get<Publishride>("https://ridesharely-backend-api.herokuapp.com/publishride/publisherforuser");
  }

  getDetailOfPubliisher():Observable<any>{
    return this.http.post<any>("https://ridesharely-backend-api.herokuapp.com/publishride/checkuserride",{id:sessionStorage.getItem("userId")});
  }

  addPublisherDetails(formData:any):Observable<any>{
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/publishride/firstpublishride",formData);
  }

  submitPublisherDetail(fromId:any,toId:any,message:any,date:any,d:any,amount:any,seat:any,time:any){
    let id=sessionStorage.getItem("userId");
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/publishride/publishride",{fromId:fromId,toId:toId,msgForBooker:message,publisherId:id,rideDate:date,rideTime:time,seatAvailable:seat,distance:d,amountPerPerson:amount,totalAmount:amount});
  }

  getParticularRideDetail(id:any){
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/publishride/particualride",{id:id});
  }

  getRidesOfBooker(from:any,to:any, date:any,seat:any):Observable<any>{
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/publishride/ridesforbooker",{to:to,date:date,from:from,seat:seat});
  }


  bookRide(seat:any,rideId:any):Observable<any>{
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/bookride/book",{seat:seat,bookerId:sessionStorage.getItem("userId"),rideId:rideId});
  }

  requestToThePublisher(rideId:any,bookRideId:any):Observable<any>{
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/publishride/requestforpublisher",{bookerId:sessionStorage.getItem("userId"),rideId:rideId,bookRideId:bookRideId});
  }



  getAllRequests(rideId:any):Observable<any>{
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/publishride/showrequesttopublisher",{publisherId:sessionStorage.getItem("userId"),rideId:rideId});
  }


  getPublishRides():Observable<any>{
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/publishride/getPublishRidesOfSingle",{publisherId:sessionStorage.getItem("userId")});
  }

  getAllBookRides():Observable<any>{
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/bookride/getbookrides",{bookerId:sessionStorage.getItem("userId")});
  }

acceptRequest(bookerId:any,rideId:any,bookRideId:any){
    return this.http.get("https://ridesharely-backend-api.herokuapp.com/publishride/acceptrequestofbooker/"+bookerId+"/"+sessionStorage.getItem("userId")
    +"/"+rideId+"/"+bookRideId);
  }

  checkConfirmBoooker(rideId:any):Observable<any>{
    return this.http.get("https://ridesharely-backend-api.herokuapp.com/publishride/showallacceptrequestbypublisher/"+sessionStorage.getItem("userId")+"/"+rideId);
  }


  matchOtp(otp:any,id:any,rideId:any):Observable<any>{
    return this.http.post("https://ridesharely-backend-api.herokuapp.com/publishride/matchotp",{otp:otp,publisherId:sessionStorage.getItem("userId"),id:id,rideId:rideId});
  }


  getAllBookRidesHistory(){
    return this.http.get("https://ridesharely-backend-api.herokuapp.com/bookerhistory/viewbookerhistory/"+sessionStorage.getItem("userId"));
  }

  getAllpublishHistory(){
    return this.http.get("https://ridesharely-backend-api.herokuapp.com/publisherhistory/publishhistiry/"+sessionStorage.getItem("userId"));
  }

  getAllUserOfPublishHistory(rideId:any){
    return this.http.get("https://ridesharely-backend-api.herokuapp.com/publisherhistory/viewpublisherhistory/"+rideId);
  }

  declineRequest(bookerId:any,rideId:any){
    return this.http.get("https://ridesharely-backend-api.herokuapp.com/publishride/declinerequestofbooker/"+bookerId+"/"+sessionStorage.getItem("userId")+"/"+rideId);
  }

  cancelRide(rideId:any):Observable<any>{
    return this.http.get("https://ridesharely-backend-api.herokuapp.com/publishride/cancellride/"+sessionStorage.getItem("userId")+"/"+rideId);
  }


  cancelRideByBooker(publisherId:any,rideId:any,bookRideId:any):Observable<any>{
      return this.http.get("https://ridesharely-backend-api.herokuapp.com/publishride/cancelridebybooker/"+sessionStorage.getItem("userId")+"/"+rideId+"/"+publisherId+"/"+bookRideId);
  }
}
