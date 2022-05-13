import { Component, OnInit } from '@angular/core';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-bookrides',
  templateUrl: './bookrides.component.html',
  styleUrls: ['./bookrides.component.css']
})
export class BookridesComponent implements OnInit {

  constructor(private publishRideService: PublishrideService) { }

  bookRides:any;
  ngOnInit(): void {
    this.publishRideService.getAllBookRides().subscribe(data => {
      this.bookRides = data;
      console.log(this.bookRides)
    });
  }
}
