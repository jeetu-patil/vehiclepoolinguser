import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private userService: UserService) { }

  user:any;

  ngOnInit(): void {
    this.userService.getUser().subscribe(data=>{
      this.user = data;
      console.log(this.user);
    });
  }

  getLength(len:any){
    if(len>0)
      return true;
    else  
      return false;
  }

}
