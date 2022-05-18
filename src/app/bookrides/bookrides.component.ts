import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-bookrides',
  templateUrl: './bookrides.component.html',
  styleUrls: ['./bookrides.component.css']
})
export class BookridesComponent implements OnInit {

  constructor(private toastr:ToastrService,private publishRideService: PublishrideService,private router:Router) { }

  bookRides:any;
  ids:any;
  bookRideId:any;
  ngOnInit(): void {
    this.publishRideService.getAllBookRides().subscribe(data => {
      this.bookRides = data.temp;
      this.ids=data.result;
    });
  }

  getLength(len:any){
    if(len>0)
      return true;
    else  
      return false;
  }

  cancelRide(publisherId:any,rideId:any,i:any){
    this.bookRideId=this.getBookRideId(i)
    this.publishRideService.cancelRideByBooker(publisherId,rideId,this.bookRideId).subscribe(data =>{
      this.toastr.success("Your ride cancel","success")
      this.ngOnInit();
    },err =>{

    });
  }

  getBookRideId(i:any){
    return this.ids[i];
  }

  navigateToDetail(id:any){
    this.router.navigate(['publisherdetail',id]);
  }
}
