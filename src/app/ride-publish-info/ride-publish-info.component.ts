import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Place } from '../model/place';
import { PlaceService } from '../services/place.service';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-ride-publish-info',
  templateUrl: './ride-publish-info.component.html',
  styleUrls: ['./ride-publish-info.component.css']
})
export class RidePublishInfoComponent implements OnInit {

  from:any;
  to:any;
  dur:boolean=false;
  date:any;
  time:any;
  date1:any;
  date2:any
  message:any;
  seat:any;
  rideType:any;
  ctime:any;

  places:Array<Place> | any;
  constructor(private spinner:NgxSpinnerService,private placeService: PlaceService,private publisRideService: PublishrideService,private router:Router,private toastr:ToastrService) {
    // this.timeValidation();
  }

  ngOnInit(): void {
    this.spinner.show();
    this.placeService.getAllPlace().subscribe(data =>{
      this.places=data;
    });
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
  dateValidation(){
    this.date1 = formatDate(new Date(),'yyyy-MM-dd','en_US');
   this.date2 =  formatDate(this.date,'yyyy-MM-dd','en_US');

    if(this.date1<=this.date2){
      this.dur=false;
     }else{
       this.dur=true;
     }
  }
  timeValidation(){
    var time = new Date();
    this.ctime= time.toLocaleString('en-US', { hour: 'numeric', minute:'2-digit', hour12: false, })
    let hour1 = (this.ctime.split(':'))[0]
      let min1 = (this.ctime.split(':'))[1]
      let ampm1= time.getMinutes();
      let hour = (this.time.split(':'))[0]
      if(hour>=12){
        hour= hour-12
      }

      let min = (this.time.split(':'))[1]
      console.log(hour1)
      console.log(hour)
      console.log(min1);
       if(hour1>=hour){

        console.log("Enter Time is valid");

       }
       else
       console.log("Enter time Invalid");

    }


  submitDetail(){
    console.log("hello"+this.rideType)
  let fromPlace = this.places.find((i: { place: any; }) => i.place === this.from);
  let toPlace = this.places.find((i: { place: any; }) => i.place === this.to);

  let lon1 =  fromPlace.longitude;
  let lon2 = toPlace.longitude;
  let lat1 = fromPlace.latitude;
  let lat2 = toPlace.latitude;

  var R = 6371; // Radius of the earth in km
  var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
  var dLon = this.deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;

  let amount=5*d;




  this.publisRideService.submitPublisherDetail(fromPlace._id, toPlace._id, this.message,this.date,d,amount,this.seat,this.time,this.rideType)
    .subscribe(data => {
      if(data.msg=="check-failed")
        this.toastr.success("You alread publish same ride....","success");
      else
        this.toastr.success("Ride Published Successfully!","success");
       this.router.navigate(['']);
    },err=>{

    });
  }

  ride(n:any){
    if(n==1)
      this.rideType="daily";
    else if(n==2)
      this.rideType="monthly";
    else
      this.rideType="weekly";
  }

  deg2rad(deg:any) {
    return deg * (Math.PI/180)
  }


}
