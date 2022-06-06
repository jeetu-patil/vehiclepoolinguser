import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Publishride } from '../model/publishride';

@Injectable({
  providedIn: 'root'
})
export class PublishrideService {
  apiUrl = environment.apiURL;
  constructor(private http:HttpClient) { }

  getMonthWeekPublishRides():Observable<any>{
    return this.http.post(this.apiUrl+"publishride/getweekmonthrides",{publisherId:sessionStorage.getItem("userId")});
  }

  getAllPublishRides():Observable<Publishride>{
    return this.http.get<Publishride>(this.apiUrl+"publishride/publisherforuser");
  }

  getDetailOfPubliisher():Observable<any>{
    return this.http.post<any>(this.apiUrl+"publishride/checkuserride",{id:sessionStorage.getItem("userId")});
  }

  addPublisherDetails(formData:any):Observable<any>{
    return this.http.post(this.apiUrl+"publishride/firstpublishride",formData);
  }

  submitPublisherDetail(fromId:any,toId:any,message:any,date:any,d:any,amount:any,seat:any,time:any,rideType:any):Observable<any>{
    let id=sessionStorage.getItem("userId");
    return this.http.post(this.apiUrl+"publishride/publishride",{fromId:fromId,toId:toId,msgForBooker:message,publisherId:id,rideDate:date,rideTime:time,seatAvailable:seat,distance:d,amountPerPerson:amount,totalAmount:amount,rideType:rideType});
    // return this.http.post("http://localhost:3000/publishride/publishride",{fromId:fromId,toId:toId,msgForBooker:message,publisherId:id,rideDate:date,rideTime:time,seatAvailable:seat,distance:d,amountPerPerson:amount,totalAmount:amount,rideType:rideType});
  }

  getParticularRideDetail(id:any){
    return this.http.post(this.apiUrl+"publishride/particualride",{id:id});
  }

  getRidesOfBooker(from:any,to:any, date:any,seat:any,rideType:any):Observable<any>{
    return this.http.post(this.apiUrl+"publishride/ridesforbooker",{to:to,date:date,from:from,seat:seat,rideType});
    // return this.http.post("http://localhost:3000/publishride/ridesforbooker",{to:to,date:date,from:from,seat:seat,rideType});
  }


  bookRide(seat:any,rideId:any):Observable<any>{
    return this.http.post(this.apiUrl+"bookride/book",{seatWant:seat,bookerId:sessionStorage.getItem("userId"),rideId:rideId});
  }

  requestToThePublisher(rideId:any,bookRideId:any):Observable<any>{
    return this.http.post(this.apiUrl+"publishride/requestforpublisher",{bookerId:sessionStorage.getItem("userId"),rideId:rideId,bookRideId:bookRideId});
  }



  getAllRequests(rideId:any):Observable<any>{
    return this.http.post(this.apiUrl+"publishride/showrequesttopublisher",{publisherId:sessionStorage.getItem("userId"),rideId:rideId});
  }

  getPublishRides():Observable<any>{
    return this.http.post(this.apiUrl+"publishride/getPublishRidesOfSingle",{publisherId:sessionStorage.getItem("userId")});
    // return this.http.post("http://localhost:3000/publishride/getPublishRidesOfSingle",{publisherId:sessionStorage.getItem("userId")});
  }

  getAllBookRides():Observable<any>{
    return this.http.post(this.apiUrl+"bookride/getbookrides",{bookerId:sessionStorage.getItem("userId")});
  }

acceptRequest(bookerId:any,rideId:any,bookRideId:any){
    return this.http.post(this.apiUrl+"publishride/acceptrequestofbooker",{bookerId:bookerId,publisherId:sessionStorage.getItem("userId"),
    rideId:rideId,bookRideId:bookRideId});
  }

  checkConfirmBoooker(rideId:any):Observable<any>{
    return this.http.post(this.apiUrl+"publishride/showallacceptrequestbypublisher",{publisherId:sessionStorage.getItem("userId"),rideId:rideId});
  }


  matchOtp(otp:any,id:any,rideId:any):Observable<any>{
    return this.http.post(this.apiUrl+"publishride/matchotp",{otp:otp,publisherId:sessionStorage.getItem("userId"),id:id,rideId:rideId});
  }


  getAllBookRidesHistory(){
    return this.http.post(this.apiUrl+"bookerhistory/viewbookerhistory",{bookerId:sessionStorage.getItem("userId")});
  }

  getAllpublishHistory(){
    return this.http.post(this.apiUrl+"publisherhistory/publishhistiry",{userId:sessionStorage.getItem("userId")});
  }

  getAllUserOfPublishHistory(rideId:any){
    return this.http.post(this.apiUrl+"publisherhistory/viewpublisherhistory",{rideId:rideId});
  }

  declineRequest(bookerId:any,rideId:any){
    return this.http.post(this.apiUrl+"publishride/declinerequestofbooker",{bookerId:bookerId,publisherId:sessionStorage.getItem("userId"),rideId:rideId});
  }

  cancelRide(rideId:any):Observable<any>{
    return this.http.post(this.apiUrl+"publishride/cancellride",{publisherId:sessionStorage.getItem("userId"),rideId:rideId});
  }


  cancelRideByBooker(publisherId:any,rideId:any,bookRideId:any):Observable<any>{
    console.log(publisherId,rideId,bookRideId);
      return this.http.post(this.apiUrl+"publishride/cancelridebybooker",{bookerId:sessionStorage.getItem("userId"),rideId:rideId,publisherId:publisherId,bookRideId:bookRideId});
  }

  getAllCancelHistory():Observable<any>{
    return this.http.post(this.apiUrl+"publisherhistory/publishercancelhistory",{publisherId:sessionStorage.getItem("userId")});
  }


  cancelBooker(bookRideId:any,rideId:any,bookerId:any) {
    return this.http.post(this.apiUrl+"publishride/cancelbooker",{bookRideId:bookRideId,rideId:rideId,bookerId:bookerId});
  }
}
