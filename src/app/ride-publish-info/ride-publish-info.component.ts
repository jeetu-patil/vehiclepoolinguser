import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  date:any;
  time:any;
  message:any;
  seat:any;

  places:Array<Place> | any;
  constructor(private placeService: PlaceService,private publisRideService: PublishrideService,private router:Router,private toastr:ToastrService) {
    
  }

  ngOnInit(): void {
    this.placeService.getAllPlace().subscribe(data =>{
      this.places=data;
    });
  }

  submitDetail(){
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


  this.publisRideService.submitPublisherDetail(fromPlace._id, toPlace._id, this.message,this.date,d,amount,this.seat,this.time)
    .subscribe(data => {
      this.toastr.success("Ride Published Successfully!","success")
       this.router.navigate(['']);
    },err=>{

    });
  }

  deg2rad(deg:any) {
    return deg * (Math.PI/180)
  }


}
