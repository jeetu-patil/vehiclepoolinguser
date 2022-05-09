import { Component, OnInit } from '@angular/core';
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
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data=>{
      this.data = data;
    });
  }


}
