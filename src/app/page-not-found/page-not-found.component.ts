import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
//  id:any=5;
  constructor(private router:Router,private api:UserService) { 
    // this.api.forTesting(this.id).subscribe(res=>{
    //   console.log(res);
    // })
  }

  homePage(){
     this.router.navigate(["home"]);
  }

  ngOnInit(): void {
  }

}
