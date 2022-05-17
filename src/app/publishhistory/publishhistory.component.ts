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

  rides:any;
  ngOnInit(): void {
    this.publishRideService.getAllpublishHistory().subscribe(data =>{
      this.rides=data;
      console.log(this.rides);
    });
  }

  navigateToCheckRightBooker(rideId:any){
    this.router.navigate(['userrides/confirmbooker',rideId]);
  } 

  allUser(){
    this.router.navigate(['userrides/alluserogpublisher']);
  }
}
