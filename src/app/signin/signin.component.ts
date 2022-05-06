import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:User = new User();
  email:string = "";
  password:string = "";
  constructor(private userService:UserService , private router:Router) { }

  ngOnInit(): void {
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
