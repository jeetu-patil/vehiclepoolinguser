import { Component, OnInit } from '@angular/core';
import { Place } from '../model/place';
import { PlaceService } from '../services/place.service';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-ridedetailinfo',
  templateUrl: './ridedetailinfo.component.html',
  styleUrls: ['./ridedetailinfo.component.css']
})
export class RidedetailinfoComponent implements OnInit {

  from:any;
  to:any;
  date:any;
  time:any;
  message:any;

  places:Array<Place> | any;
  constructor(private placeService: PlaceService) {
    
  }

  ngOnInit(): void {
    this.getAllPlace();
  }

  submitDetail(){
    // this.publisRideService.submitDetail(this.from, this.to, this.message,this.time,this.date).subscribe(data => {

    // },err=>{

    // });
    console.log(this.from+"  "+this.to)
    let test=this.places.pop(this.from);
    console.log(test)
  }

  getAllPlace(){
    this.placeService.getAllPlace().subscribe(data =>{
      this.places=data;
    });
  }
}
