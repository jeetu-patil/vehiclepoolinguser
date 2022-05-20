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
  publishRide:any;
  status=false;
  seat:any;

  ngOnInit(): void {
    this.from =this.activatedRoute.snapshot.paramMap.get("from");
    this.to =this.activatedRoute.snapshot.paramMap.get("to");
    this.date =this.activatedRoute.snapshot.paramMap.get("date");
    this.seat =this.activatedRoute.snapshot.paramMap.get("seat");

    this.publisRideService.getRidesOfBooker(this.from, this.to, this.date,this.seat).subscribe(data => {
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
  }

  viewRide(publishId:any){
    this.router.navigate(['ridedetail/'+publishId+'/'+this.seat]);
  }

}
