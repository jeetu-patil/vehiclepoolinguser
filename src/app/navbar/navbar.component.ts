import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) { }

  name:any;
  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.name=user.name;
    });
  }

  isLoggedIn(){
    if(sessionStorage.getItem("userId"))
      return true;
    return false;
  }

  signout(){
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("jwt-token");
  }
}
