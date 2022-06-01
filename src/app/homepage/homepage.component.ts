import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
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

  ngOnInit(): void {
    this.spinner.show();
    this.publisRideService.getAllPublishRides().subscribe(res=>{
      this.publishRide=res;
     },err =>{
      this.toastr.warning("Something went wrong...");
     });
    
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

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
