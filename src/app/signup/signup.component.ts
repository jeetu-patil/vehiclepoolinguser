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
  tempemail:any;
  ET:any=false;
  ve=false;

  constructor(private toastr:ToastrService, private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }

  signupUser(){
      this.userService.signupUser(this.user).subscribe(data => {
        if(data.msg=="error")
          this.toastr.error("Fill All Detail","Error");
        else{
          this.toastr.success("SignUp success","success")
          this.router.navigate(['verification-otp',data._id]);
        }
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

  checkEmail():boolean{
    if(this.tempemail==this.user.email){
      this.ET=true;
      return true;
    }
    else{
    return false;}
  }

  email(){
    this.userService.checkEmai().subscribe(data=>{
      for(let i=0;i<data.length;i++){
        if(data[i].email==this.user.email)
        {
          this.ve=true;
          break;
        }
        else  
          this.ve=false;
      }
    },err=>{

    });
  }
}


