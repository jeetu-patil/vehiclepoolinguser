import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {
  }

  mobileVerify(){
    this.userService.getOtp(this.mobile).subscribe(data => {
      console.log(data);
      this.tempOtp=data.otp;
    });
  }

  verifyNumber(){
    if(this.tempOtp==this.otp)
    { 
      this.userService.verifyMobile(this.mobile).subscribe(data => {
        alert("Your MObile Number Varify Successfully...");
        this.router.navigate(['sign-in']);
      });    
    }
    else
    { 
      console.log("Temp : "+this.tempOtp+" Otp : "+this.otp);
      alert("You entered wrong otp plzz enter again...");
      this.router.navigate(['verification-otp']);
    }
  }

}
