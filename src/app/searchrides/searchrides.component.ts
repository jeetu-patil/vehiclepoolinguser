import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-searchrides',
  templateUrl: './searchrides.component.html',
  styleUrls: ['./searchrides.component.css']
})
export class SearchridesComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private activatedRoute: ActivatedRoute,private publisRideService: PublishrideService,private router:Router) {
   }

  from:any;
  to:any
  date:any;
  publishRide:any;
  status=false;
  seat:any;
  rideType:any;

  ngOnInit(): void {
    this.spinner.show();
    this.from =this.activatedRoute.snapshot.paramMap.get("from");
    this.to =this.activatedRoute.snapshot.paramMap.get("to");
    this.date =this.activatedRoute.snapshot.paramMap.get("date");
    this.seat =this.activatedRoute.snapshot.paramMap.get("seat");
    this.rideType =this.activatedRoute.snapshot.paramMap.get("ridetype");

    this.publisRideService.getRidesOfBooker(this.from, this.to, this.date,this.seat,this.rideType).subscribe(data => {
      console.log(data)
      if(data.length>0){
        this.publishRide=data;
      }
      else
      {
         this.status=true;
      }
    },err=>{

    });
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  viewRide(publishId:any){
    this.router.navigate(['ridedetail/'+publishId+'/'+this.seat]);
  }

}
