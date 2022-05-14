import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-confirmbooker',
  templateUrl: './confirmbooker.component.html',
  styleUrls: ['./confirmbooker.component.css']
})
export class ConfirmbookerComponent implements OnInit {

  pubilsh:any;
  otp:any;
  constructor(private publisRideService: PublishrideService,private router:Router) { }

  ngOnInit(): void {
    this.publisRideService.checkConfirmBoooker().subscribe(data => {
      this.pubilsh=data.otp;
      console.log(this.pubilsh.otp);
    },err=>{

    });
  }

  getLength(len:any){
    if(len>0)
      return true;
    else  
      return false;
  }

  navigateToDetail(id:any){
    console.log("Id : "+id);
    this.router.navigate(['publisherdetail',id]);
  }

  matchOtp(id:any){
    this.publisRideService.matchOtp(this.otp,id).subscribe(data => {
      console.log(data)
      if(data.msg=="Success")
      { 
        alert("Otp matched.......");
        this.ngOnInit();
      }
      else
      { 
        alert("Otp is not matched.......");
        this.ngOnInit();
      }
    },err => {

    });
  }
  
}
