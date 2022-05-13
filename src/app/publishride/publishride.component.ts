import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-publishride',
  templateUrl: './publishride.component.html',
  styleUrls: ['./publishride.component.css']
})
export class PublishrideComponent implements OnInit {

  constructor(private router: Router,private activatedRoute: ActivatedRoute,private publisRideService: PublishrideService) { }

  rides:any;
  ngOnInit(): void {
    this.publisRideService.getPublishRides().subscribe(data=>{
      this.rides=data;
      console.log(this.rides);
    },err=>{

    });
  }

  navigateToUserRequest(id:any){
    this.router.navigate(['userrides/acceptrequest',id]);
  }

  navigateToCheckRightBooker(){
    this.router.navigate(['userrides/confirmbooker']);
  } 
}                                                            