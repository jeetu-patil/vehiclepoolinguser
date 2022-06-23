import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.css']
})
export class RideDetailComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private toastr:ToastrService,private activatedRoute: ActivatedRoute,private publisRideService: PublishrideService,private router:Router) { }

  id:any;
  publish:any;
  time:any={
    hour:0,
    minute:0
  };
  seat:any;

  ngOnInit(): void {
    this.spinner.show();
    this.id=this.activatedRoute.snapshot.paramMap.get("publishId");
    this.publisRideService.getParticularRideDetail(this.id).subscribe(data => {
      this.publish=data;
      console.log(this.publish)
    },err => {

    });

    this.seat=this.activatedRoute.snapshot.paramMap.get("seat");
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }


  bookRide(){
    console.log(this.seat)
    this.publisRideService.bookRide(this.seat,this.publish._id).subscribe(data => {
      if(data.msg=="already available")
        this.toastr.success("You booked already one ride please wait for publisher response..","success");
      else{
        this.publisRideService.requestToThePublisher(this.id,data._id).subscribe(data => {
          this.toastr.success("Your request sent to the publisher please wait fotr response..","success")
          this.router.navigate(['']);
        })
      }
    })
  }

  getLength(){
    if(this.publish.publisherId.image.length>0)
      return true;
    else
      return false;
  }

  navigateToDetail(publisherId:any){
    this.router.navigate(['publisherdetail',publisherId])
  }

  getTime(distance:any){
    let t=distance*3;
    this.time.hour=t/60;
    this.time.minute=t%60;
  }
}
