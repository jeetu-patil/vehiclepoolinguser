import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-publisherdetail',
  templateUrl: './publisherdetail.component.html',
  styleUrls: ['./publisherdetail.component.css']
})
export class PublisherdetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private userService: UserService) { }

  userId:any;
  user:any;
  ngOnInit(): void {
    this.userId=this.activatedRoute.snapshot.paramMap.get("userId");

    this.userService.getPublisher(this.userId).subscribe(data => {
      console.log(data)
      this.user=data;
    },err => {

    });
  }

  getLength(){
    if(this.user.image.length>0)
      return true;
    else  
      return false;
  }

}
