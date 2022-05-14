import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublishrideService } from '../services/publishride.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-bookhistory',
  templateUrl: './bookhistory.component.html',
  styleUrls: ['./bookhistory.component.css']
})
export class BookhistoryComponent implements OnInit {

  constructor(private publisRideService: PublishrideService,private router:Router,private userService:UserService) { }

  users:any;
  comment:any;
  ngOnInit(): void {
    this.publisRideService.getAllBookRidesHistory().subscribe(data => {
      this.users=data;
      console.log(this.users);
    })
  }

  getLength(len:any){
    if(len>0)
      return true;
    else  
      return false;
  }

  navigateToDetail(id:any){
    console.log("Id : "+id);
    this.router.navigate(['publisherdetail',id]);
  }

  addComment(id:any){
    this.userService.addComment(this.comment).subscribe(data=>{
      alert("Comment added...");
      this.ngOnInit();
    });
  }

}
