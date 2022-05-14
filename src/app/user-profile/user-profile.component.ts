import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
data:any;
name:string = '';
email:string = '';
address:string = '';
mobile:string = '';
  constructor(private userService:UserService , private router:Router) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data=>{
      this.data = data;
    });
  }

  editProfile(){
    this.router.navigate(["edit-profile"]);
  }
}
