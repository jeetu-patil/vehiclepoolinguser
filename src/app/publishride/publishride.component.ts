import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-publishride',
  templateUrl: './publishride.component.html',
  styleUrls: ['./publishride.component.css']
})
export class PublishrideComponent implements OnInit {

  constructor(private toastr:ToastrService,private router: Router,private activatedRoute: ActivatedRoute,private publisRideService: PublishrideService) { }

  rides:any;
  ngOnInit(): void {
    this.publisRideService.getPublishRides().subscribe(data=>{
      this.rides=data;
      console.log(this.rides);
    },err=>{

    });
  }

  navigateToUserRequest(id:any){
    this.router.navigate(['acceptrequest',id]);
  }

  cancelRide(id:any){
    this.publisRideService.cancelRide(id).subscribe(data => {
      if(data.msg=="cancel")
      this.toastr.success("Ride Cancell..","Success");
      else
      this.toastr.error("Internal Server Error","Error");
    },err=>{

    });
  }

}                                                            