import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
  constructor(private spinner:NgxSpinnerService,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.spinner.show();
    this.userService.getUser().subscribe(data=>{
      this.user = data;
      this.comments=this.user.comments;
    });
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
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
