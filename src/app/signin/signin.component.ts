import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private social:SocialAuthService,private userService:UserService,private router:Router) { }

  email:string = "";
  password:string = "";
  
  ngOnInit(): void {
  }

  signInWithGoogle(){
    this.social.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(() => {
      this.social.authState.subscribe(data => {
        this.userService.loginWithGoogle(data.email).subscribe(data1 => {
          if(!data1) {
            window.alert("You are not register with us..");
            this.router.navigate(["/signup"]);
          }
          else{
            window.alert("Welcom to Ride With Us");
            console.log(data1);
            sessionStorage.setItem("jwt-token",data1.token);
            sessionStorage.setItem("userId",data1.result._id);
            this.router.navigate(["/"])
          }
        })
      })
    })
  }

  navigateToSignup(){
    this.router.navigate(['sign-up']);
  }

  signinUser(){
    console.log(this.email+"  ----   "+this.password);
      this.userService.signinUser(this.email,this.password).subscribe(data=>{
        if(data.status=="Login Success"){
          sessionStorage.setItem("jwt-token",data.token);
          sessionStorage.setItem("userId",data.result._id);
          this.router.navigate(['home']);
        }
      });
  }
}
