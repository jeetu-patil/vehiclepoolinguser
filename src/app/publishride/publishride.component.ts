import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-publishride',
  templateUrl: './publishride.component.html',
  styleUrls: ['./publishride.component.css']
})
export class PublishrideComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private toastr:ToastrService,private router: Router,private activatedRoute: ActivatedRoute,private publisRideService: PublishrideService) { }

  rides:any;
  status=false;


  ngOnInit(): void {
    this.spinner.show();
    this.publisRideService.getPublishRides().subscribe(data=>{
      this.rides=data;
      if(!(this.rides.length>0))
        this.status=true;
      console.log(this.rides);
    },err=>{

    });
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
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
