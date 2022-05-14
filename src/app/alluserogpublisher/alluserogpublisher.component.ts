import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-alluserogpublisher',
  templateUrl: './alluserogpublisher.component.html',
  styleUrls: ['./alluserogpublisher.component.css']
})
export class AlluserogpublisherComponent implements OnInit {

  constructor(private publishRideService: PublishrideService,private router:Router) { }

  bookRides:any;
  ngOnInit(): void {
    this.publishRideService.getAllpublishHistory().subscribe(data =>{
      this.bookRides=data;
      console.log(this.bookRides);
    });
  }

  getLength(len:any){
    if(len>0)
      return true;
    else  
      return false;
  }

  cancelRide(){

  }

  navigateToDetail(id:any){
    this.router.navigate(['publisherdetail',id]);
  }

}
