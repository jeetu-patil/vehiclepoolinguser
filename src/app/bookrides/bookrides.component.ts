import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-bookrides',
  templateUrl: './bookrides.component.html',
  styleUrls: ['./bookrides.component.css']
})
export class BookridesComponent implements OnInit {

  constructor(private publishRideService: PublishrideService,private router:Router) { }

  bookRides:any;
  ngOnInit(): void {
    this.publishRideService.getAllBookRides().subscribe(data => {
      this.bookRides = data;
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
