import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.css']
})
export class RideDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private publisRideService: PublishrideService,private router:Router) { }

  id:any;
  publish:any;
  seat:any;

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get("publishId");
    this.publisRideService.getParticularRideDetail(this.id).subscribe(data => {
      this.publish=data;
      console.log(this.publish)
    },err => {

    });

    this.seat=this.activatedRoute.snapshot.paramMap.get("seat");
  }


  bookRide(){
    this.publisRideService.bookRide(this.seat,this.publish.publisherId._id).subscribe(data => {
      this.publisRideService.requestToThePublisher(this.id).subscribe(data => {
        alert("Your request sent to the publisher please wait fotr response..");
      })
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
}
