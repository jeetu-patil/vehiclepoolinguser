import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PublishrideService } from '../services/publishride.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-alluserogpublisher',
  templateUrl: './alluserogpublisher.component.html',
  styleUrls: ['./alluserogpublisher.component.css']
})
export class AlluserogpublisherComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private toastr:ToastrService,private activatedRoute: ActivatedRoute,private publishRideService: PublishrideService,private router:Router,private userService: UserService) { }

  bookRides:any;
  rideId:any;
  status=false;

  ngOnInit(): void {
    this.spinner.show();
    this.rideId=this.activatedRoute.snapshot.paramMap.get("rideId");
    this.publishRideService.getAllUserOfPublishHistory(this.rideId).subscribe(data =>{
      this.bookRides=data;
      if(!(this.bookRides.length > 1)){
        this.status=true;
      }
      console.log(this.bookRides);
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

  cancelRide(){

  }

  navigateToDetail(id:any){
    this.router.navigate(['publisherdetail',id]);
  }

  addComment(id:any,comment:any){
    this.userService.addComment(comment,id).subscribe(data=>{
      this.toastr.success("Comment Added..","success")
      this.ngOnInit();
    });
  }

}
