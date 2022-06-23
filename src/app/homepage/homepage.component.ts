import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';
import { Publishride } from '../model/publishride';
import { PlaceService } from '../services/place.service';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService, private placeService: PlaceService,private publisRideService: PublishrideService,private router:Router,private activatedRoute: ActivatedRoute,private toastr : ToastrService) { }

  publishRide!:any;
  from:any;
  to:any;
  date:any;
  status=true;
  seat:any;
  places:any=[];
  p:any;
  rideType:any;

  ngOnInit(): void {
    this.spinner.show();
    this.publisRideService.getAllPublishRides().subscribe(res=>{
      this.publishRide=res;
      console.log(environment.apiURL);
     },err =>{
      // this.toastr.warning("Something went wrong...");
     });

    setTimeout(() => {
      this.spinner.hide();
    }, 3000);

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
  if(sessionStorage.getItem("userId")){
  let fromPlace = this.places.find((i: { place: any; }) => i.place === this.from);
  let toPlace = this.places.find((i: { place: any; }) => i.place === this.to);
  this.status=false;
  this.router.navigate(['searchride',fromPlace._id,toPlace._id,this.date,this.seat,this.rideType]);
  }else{
    this.toastr.info("Please sign in first to search ride");
    this.router.navigate(["sign-in"]);
  }
  }

  changeRideType(event:any){
  this.rideType = event.target.value;
  }

}
