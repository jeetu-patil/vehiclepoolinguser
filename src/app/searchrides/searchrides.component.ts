import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-searchrides',
  templateUrl: './searchrides.component.html',
  styleUrls: ['./searchrides.component.css']
})
export class SearchridesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private publisRideService: PublishrideService,private router:Router) {
   }

  from:any;
  to:any
  date:any;
  publishRides:any;
  status=false;

  ngOnInit(): void {
    this.from =this.activatedRoute.snapshot.paramMap.get("from");
    this.to =this.activatedRoute.snapshot.paramMap.get("to");
    this.date =this.activatedRoute.snapshot.paramMap.get("date");


    this.publisRideService.getRidesOfBooker(this.from, this.to, this.date).subscribe(data => {
      if(data.length>0){
        this.publishRides=data;
      }
      else
      {
         this.status=true;
      }
    },err=>{

    });
  }

  viewRide(publishId:any){
    this.router.navigate(['ridedetail/'+publishId]);
  }

}
