import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-publisherdetail',
  templateUrl: './publisherdetail.component.html',
  styleUrls: ['./publisherdetail.component.css']
})
export class PublisherdetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private userService: UserService,private router:Router) { }

  userId:any;
  user:any;
  comments:any;
  p:any;
  ngOnInit(): void {
    this.userId=this.activatedRoute.snapshot.paramMap.get("userId");
    console.log(this.userId)
    this.userService.getPublisher(this.userId).subscribe(data => {
      console.log(data)
      this.user=data;
      this.comments=this.user.comments;
    },err => {

    });
  }

  getLength(len:any){
    if(len>0)
      return true;
    else  
      return false;
  }

  navigateToDetail(publisherId:any){
    this.router.navigate(['publisherdetail',publisherId])
  }

}
