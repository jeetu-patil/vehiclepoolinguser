import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublishrideService } from '../services/publishride.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-alluserogpublisher',
  templateUrl: './alluserogpublisher.component.html',
  styleUrls: ['./alluserogpublisher.component.css']
})
export class AlluserogpublisherComponent implements OnInit {

  constructor(private publishRideService: PublishrideService,private router:Router,private userService: UserService) { }

  bookRides:any;
  comment:any;
  ngOnInit(): void {
    this.publishRideService.getAllUserOfPublishHistory().subscribe(data =>{
      this.bookRides=data;
    });
  }

  getLength(len:any){
    if(len>0)
      return true;
    else  
      return false;
  }

  cancelRide(){

  }

  navigateToDetail(id:any){
    console.log(id)
    this.router.navigate(['publisherdetail',id]);
  }

  addComment(id:any){
    this.userService.addComment(this.comment,id).subscribe(data=>{
      alert("Comment added...");
      this.ngOnInit();
    });
  }

}
