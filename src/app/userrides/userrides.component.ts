import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userrides',
  templateUrl: './userrides.component.html',
  styleUrls: ['./userrides.component.css']
})
export class UserridesComponent implements OnInit {

  constructor(private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToBookRides(){
    this.router.navigate(['bookrides'],{relativeTo:this.activatedRoute});
  }

  navigateToBookHistory(){
    this.router.navigate(['bookhistory'],{relativeTo:this.activatedRoute});
  }

  navigateToPublishRides(){
    this.router.navigate(['publishride'],{relativeTo:this.activatedRoute});
  }

  navigateToPublisherHistory(){
    this.router.navigate(['publishhistory'],{relativeTo:this.activatedRoute});
  }

}
