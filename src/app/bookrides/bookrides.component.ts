import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-bookrides',
  templateUrl: './bookrides.component.html',
  styleUrls: ['./bookrides.component.css']
})
export class BookridesComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private toastr:ToastrService,private publishRideService: PublishrideService,private router:Router) { }

  bookRides:any;
  ids:any;
  bookRideId:any;
  status=false;


  ngOnInit(): void {
  this.spinner.show();
    this.publishRideService.getAllBookRides().subscribe(data => {
      this.bookRides = data.temp;
      this.ids=data.result;

      console.log(this.bookRides.length);

      if(!(this.bookRides.length > 0))
        this.status=true;
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

  cancelRide(publisherId:any,rideId:any,i:any){
    console.log(i);
    console.log(this.ids[i]);
    this.bookRideId=this.ids[i];
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
