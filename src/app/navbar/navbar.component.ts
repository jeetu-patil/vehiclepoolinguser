import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublishrideService } from '../services/publishride.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService,private publisRideService: PublishrideService,private router:Router) { }

  name:any="";
  ngOnInit(): void {
    // this.userService.getUser().subscribe((user) => {
    //   this.name=user.name;
    // });
  }

  isLoggedIn(){
    if(sessionStorage.getItem("userId"))
      return true;
    return false;
  }

  signout(){
    if(confirm("Are you Sure ?")){
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("jwt-token");
       this.router.navigate(["sign-in"]);
    }
  }

  navigateToSearchPage(){
    this.router.navigate(["search-ride"])
  }

  navigateToVehicleDetail(){
        this.publisRideService.getDetailOfPubliisher().subscribe(data => {
        if(data.count==0){
          this.router.navigate(['vehicle-detail']);
        }
        else
          this.router.navigate(['publish-info']);
    });
  }

  navigateToUserRide(){
    this.router.navigate(['userrides']);
  }

  navigateToBookRides(){
    this.router.navigate(['bookrides']);
  }

  navigateToBookHistory(){
    this.router.navigate(['bookhistory']);
  }

  navigateToPublishRides(){
    this.router.navigate(['publishride']);
  }

  navigateToPublisherHistory(){
    this.router.navigate(['publishhistory']);
  }

  navigateToMonthWeek(){
    this.router.navigate(['monthweek']);
  }
}
