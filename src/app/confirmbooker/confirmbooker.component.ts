import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-confirmbooker',
  templateUrl: './confirmbooker.component.html',
  styleUrls: ['./confirmbooker.component.css']
})
export class ConfirmbookerComponent implements OnInit {

  pubilsh:any;
  status=false;
  data:any;
  constructor(private spinner:NgxSpinnerService,private toastr:ToastrService,private publisRideService: PublishrideService,private router:Router,private activatedRoute: ActivatedRoute) { }

  rideId:any;
  ngOnInit(): void {
    this.spinner.show();
    this.rideId=this.activatedRoute.snapshot.paramMap.get("rideId");
    this.publisRideService.checkConfirmBoooker(this.rideId).subscribe(data => {
      this.pubilsh=data.otp;
      this.data=data;
      console.log(this.pubilsh)

      if(!(this.pubilsh.length>0))
        this.status=true;
    },err=>{

    });
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
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

  matchOtp(id:any,otp:any){
    this.publisRideService.matchOtp(otp,id,this.rideId).subscribe(data => {
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

  cancel(bookRideId:any,bookerId:any) {
    let rideId=this.data._id;
    this.publisRideService.cancelBooker(bookRideId,rideId,bookRideId).subscribe(data=>{
      console.log(data)
      if(data)
      {
        this.toastr.success("User Cancel...","success");
        this.ngOnInit();
      }
    },err=>{

    });
  }

}
