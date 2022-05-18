import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publishride } from '../model/publishride';
import { PlaceService } from '../services/place.service';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private placeService: PlaceService,private publisRideService: PublishrideService,private router:Router,private activatedRoute: ActivatedRoute) { }

  publishRide!:any;
  from:any;
  to:any;
  date:any;
  status=true;
  seat:any;
  places:any=[];
  p:any;

  ngOnInit(): void {
    this.publisRideService.getAllPublishRides().subscribe(data => {
      this.publishRide=data;
    },err =>{

    });

    setTimeout(() => {
      this.placeService.getAllPlace().subscribe(data => {
        this.places=data;
      },err =>{

      });
    },3000);
  }

  viewRide(publishId:any){
    this.router.navigate(['ridedetail/'+publishId+'/'+1]);
  }

  searchRides(){
  let fromPlace = this.places.find((i: { place: any; }) => i.place === this.from);
  let toPlace = this.places.find((i: { place: any; }) => i.place === this.to);
  this.status=false;
  this.router.navigate(['searchride',fromPlace._id,toPlace._id,this.date,this.seat]);
  }

}
