import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-acceptrequestpage',
  templateUrl: './acceptrequestpage.component.html',
  styleUrls: ['./acceptrequestpage.component.css']
})
export class AcceptrequestpageComponent implements OnInit {

  constructor(private publisRideService:PublishrideService,private activatedRoute: ActivatedRoute) { }

  requets:any;
  date:any;
  from:any;
  to:any;
  bookerId:any;
  rideId:any;

  user:any;

  ngOnInit(): void {
    this.rideId=this.activatedRoute.snapshot.paramMap.get("rideId");
    console.log(this.rideId);
    this.publisRideService.getAllRequests(this.rideId).subscribe(data => {
      this.requets = data.publisherRequest;
      console.log(data);
      this.date=data.rideDate;
      this.from=data.fromId.place;
      this.to=data.toId.place;
    },err => {

    });
  }

  getLength(i:any){
    if(this.requets[i].image.length>0)
      return true;
    else  
      return false;
  }

  acceptRequest(bookerId:any){
    this.publisRideService.acceptRequest(bookerId,this.rideId).subscribe(data => {
      this.ngOnInit();
    },err => {

    });
  }

}
