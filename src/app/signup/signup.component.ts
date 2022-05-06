import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User = new User();

  constructor(private toastr:ToastrService, private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }

  signupUser(){
    console.log(this.user)
      this.userService.signupUser(this.user).subscribe(data => {
      console.log(data)
     this.toastr.success("SignUp success","success")
       this.router.navigate(['verification-otp',data._id]);
     },err=>{
      if(err instanceof HttpErrorResponse){
        if(err.status == 500){
          this.toastr.error("Internal Server Error","Error");
        }
      }
     });
  }
  navigateToSignin(){
    this.router.navigate(['sign-in']);
  }
}
