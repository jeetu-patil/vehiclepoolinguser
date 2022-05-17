import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
user:any;
name:string = '';
email:string = '';
address:string = '';
mobile:string = '';
comments:any;
p:any;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data=>{
      this.user = data;
      console.log(this.user);
      this.comments=this.user.comments;
    });
  }

  getLength(len:any){
    if(len>0)
      return true;
    else  
      return false;
  }

  editProfile(){
    this.router.navigate(['edit-profile']);
  }

  navigateToDetail(publisherId:any){
    this.router.navigate(['publisherdetail',publisherId])
  }

}
