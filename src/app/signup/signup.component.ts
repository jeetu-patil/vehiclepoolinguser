import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User=new User();

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }

  signupUser(){
      this.userService.signupUser(this.user).subscribe(data => {
      console.log(data)
      alert("Signup Success!");
       this.router.navigate(['verification-otp',data._id]);
     });
  }
}
