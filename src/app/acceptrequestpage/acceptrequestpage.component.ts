import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-acceptrequestpage',
  templateUrl: './acceptrequestpage.component.html',
  styleUrls: ['./acceptrequestpage.component.css']
})
export class AcceptrequestpageComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService, private toastr:ToastrService,private publisRideService:PublishrideService,private activatedRoute: ActivatedRoute,private router:Router) { }

  requets:any;
  date:any;
  from:any;
  to:any;
  bookerId:any;
  rideId:any;
  status:any=false;

  user:any;

  ngOnInit(): void {
    this.spinner.show();
    this.rideId=this.activatedRoute.snapshot.paramMap.get("rideId");
    this.publisRideService.getAllRequests(this.rideId).subscribe(data => {
      this.requets = data.publisherRequest;
      this.date=data.rideDate;
      this.from=data.fromId.place;
      this.to=data.toId.place;
      if(!(this.requets.length>0))
        this.status=true;
    },err => {

    });
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }


  getLength(i:any){
    console.log(this.requets[i].userId.image)
    if(this.requets[i].userId.image.length>0)
      return true;
    else
      return false;
  }

  acceptRequest(bookerId:any,bookRideId:any){
    this.publisRideService.acceptRequest(bookerId,this.rideId,bookRideId).subscribe(data => {
      this.toastr.success("User Accept...","Success");
      this.ngOnInit();
    },err => {

    });
  }

  declineRequest(bookerId:any){
    this.publisRideService.declineRequest(bookerId,this.rideId).subscribe(data => {
      this.toastr.success("User Decline...","Success");
      this.ngOnInit();
    },err => {

    });
  }

  navigateToDetail(publisherId:any){
    this.router.navigate(['publisherdetail',publisherId])
  }

}
