import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PublishrideService } from '../services/publishride.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-bookhistory',
  templateUrl: './bookhistory.component.html',
  styleUrls: ['./bookhistory.component.css']
})
export class BookhistoryComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService,private toastr:ToastrService,private publisRideService: PublishrideService,private router:Router,private userService:UserService) { }

  users:any;
  status=false;

  ngOnInit(): void {
    this.spinner.show();
    this.publisRideService.getAllBookRidesHistory().subscribe(data => {
      this.users=data;

      if(!(this.users.length > 0))
        this.status=true;
    })
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
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

  addComment(id:any,comment:any){
    this.userService.addComment(comment,id).subscribe(data=>{
      this.toastr.success("Comment Added..","success")
      this.ngOnInit();
    });
  }

}
