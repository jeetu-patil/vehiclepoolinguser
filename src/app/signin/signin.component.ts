import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private social:SocialAuthService,private userService:UserService,private router:Router ,private toastr : ToastrService) { }

  email:string = "";
  password:string = "";
  ngOnInit(): void {
  }
//
  signInWithGoogle(){
    this.social.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(() => {
      this.social.authState.subscribe(data => {
        this.userService.loginWithGoogle(data.email,data.name).subscribe(data1 => {
          if(data1.status=="Login Failed") {
            this.toastr.info("You are not register with us..");
            this.router.navigate(["sign-up"]);
          }
          else{     
            this.toastr.success("Login Success..");
            sessionStorage.setItem("jwt-token",data1.token);
            sessionStorage.setItem("userId",data1.result._id);
            this.router.navigate([""]);
          }
        })
      })
    })
  }

  change(){
    this.router.navigate(['forgot']);
  }
  navigateToSignup(){
    this.router.navigate(['sign-up']);
  }

  signinUser(){
      this.userService.signinUser(this.email,this.password).subscribe(data=>{

        if(data.msg=="error"){
          this.toastr.error("Please Fill Detail");
        }
        else{
          this.toastr.success("Login Success","Success");
          sessionStorage.setItem("jwt-token",data.token);
          sessionStorage.setItem("userId",data.result._id);
          this.router.navigate([""]);
        }
      },err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status == 401){
            this.toastr.error("Invalid User","Unauthorized request");
          }
          else if(err.status == 500){
            this.toastr.error("Internal Server Error","Error");
          }
        }
      });
    }
  }
