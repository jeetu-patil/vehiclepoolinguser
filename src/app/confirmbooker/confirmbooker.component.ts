import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-confirmbooker',
  templateUrl: './confirmbooker.component.html',
  styleUrls: ['./confirmbooker.component.css']
})
export class ConfirmbookerComponent implements OnInit {

  pubilsh:any;
  otp:any;
  constructor(private toastr:ToastrService,private publisRideService: PublishrideService,private router:Router,private activatedRoute: ActivatedRoute) { }

  rideId:any;
  ngOnInit(): void {
    this.rideId=this.activatedRoute.snapshot.paramMap.get("rideId");
    this.publisRideService.checkConfirmBoooker(this.rideId).subscribe(data => {
      this.pubilsh=data.otp;
      console.log(this.pubilsh.otp);
    },err=>{

    });
  }

  getLength(len:any){
    if(len>0)
      return true;
    else  
      return false;
  }

  navigateToDetail(id:any){
    this.router.navigate(['publisherdetail',id]);
  }

  matchOtp(id:any){
    this.publisRideService.matchOtp(this.otp,id,this.rideId).subscribe(data => {
      if(data.msg=="Success")
      { 
        this.toastr.success("Otp matched","success")
        this.ngOnInit();
      }
      else
      { 
        this.toastr.error("Otp Not matched","error");
        this.ngOnInit();
      }
    },err => {

    });
  }
  
}
