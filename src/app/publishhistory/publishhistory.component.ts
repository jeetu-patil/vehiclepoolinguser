import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-publishhistory',
  templateUrl: './publishhistory.component.html',
  styleUrls: ['./publishhistory.component.css']
})
export class PublishhistoryComponent implements OnInit {

  constructor(private publishRideService: PublishrideService,private router:Router) { }

  rides:any=[];
  completeRides:any=[];

  confirmStatus=false;
  rideStatus=false;

  k=0;
  j=0;
  ngOnInit(): void {
    this.publishRideService.getAllpublishHistory().subscribe(data =>{
      let r:any=data;
      console.log(this.rides);

      for(var i=0; i<r.length; i++){
        if(r[i].otp.length>0){
          this.rides[this.k++]=r[i];
          this.rideStatus=true;
        }
        else{
          this.confirmStatus=true;
          this.completeRides[this.j++]=r[i];
        }
      }
    });
  }

  navigateToCheckRightBooker(rideId:any){
    this.router.navigate(['confirmbooker',rideId]);
  } 

  allUser(rideId:any){
    this.router.navigate(['alluserogpublisher',rideId]);
  }
}
