import { Component, OnInit } from '@angular/core';
import { Publishride } from '../model/publishride';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private publisRideService: PublishrideService) { }

  publishRide!:any;
  ngOnInit(): void {
    this.publisRideService.getAllPublishRides().subscribe(data => {
      this.publishRide=data;
      console.log(this.publishRide)
    },err =>{

    });
  }

}
