import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-verification-otp',
  templateUrl: './verification-otp.component.html',
  styleUrls: ['./verification-otp.component.css']
})
export class VerificationOtpComponent implements OnInit {

  mobile:any;
  tempOtp:any;
  otp:any
  userId:any;
  publishRideCount:any;

  constructor(private toastr:ToastrService,private router: Router,private userService: UserService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  mobileVerify(){
    this.userId=this.activatedRoute.snapshot.paramMap.get('userId');
    this.userService.getOtp(this.mobile,this.userId).subscribe(data => {
      this.tempOtp=data.otp;
      this.publishRideCount=data.user.publishRideCount;
    });
  }

  verifyNumber(){
    if(this.tempOtp==this.otp)
    {
      this.userService.verifyMobile(this.mobile).subscribe(data => {
        this.toastr.success("Welcome To RideSharely...","success")
        if(this.publishRideCount>0)
          return this.router.navigate(['']);
        return this.router.navigate(['verify-email']);
      });
    }
    else
    {
      this.toastr.success("You entered wrong otp plzz enter again...","success")
      this.router.navigate(['verification-otp',this.userId]);
    }
  }

}
