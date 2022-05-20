import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PublishrideService } from '../services/publishride.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-alluserogpublisher',
  templateUrl: './alluserogpublisher.component.html',
  styleUrls: ['./alluserogpublisher.component.css']
})
export class AlluserogpublisherComponent implements OnInit {

  constructor(private toastr:ToastrService,private activatedRoute: ActivatedRoute,private publishRideService: PublishrideService,private router:Router,private userService: UserService) { }

  bookRides:any;
  comment:any;
  rideId:any;

  ngOnInit(): void {
    this.rideId=this.activatedRoute.snapshot.paramMap.get("rideId");
    this.publishRideService.getAllUserOfPublishHistory(this.rideId).subscribe(data =>{
      this.bookRides=data;
      console.log(this.bookRides);
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
    this.router.navigate(['publisherdetail',id]);
  }

  addComment(id:any){
    this.userService.addComment(this.comment,id).subscribe(data=>{
      this.toastr.success("Comment Added..","success")
      this.ngOnInit();
    });
  }

}
