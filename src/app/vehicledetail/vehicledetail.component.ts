import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-vehicledetail',
  templateUrl: './vehicledetail.component.html',
  styleUrls: ['./vehicledetail.component.css']
})
export class VehicledetailComponent implements OnInit {

  constructor(private publishrideService: PublishrideService,private toastr:ToastrService,private router:Router) { }

  drivin:any;
  vehcile:any;
  name:any
  wheeler:any;
  number:any
  image:any=[];

  ngOnInit(): void {
  }

  selectImage(event:any){
    const file = event.target.files[0];
    this.drivin = file;
  }

  selectImage1(event:any){
    const file = event.target.files[0];
    this.vehcile= file;
  }

  submitDetail(){
    this.image[0]=this.vehcile;
    this.image[1]=this.drivin;
    console.log(this.image)


    let formData =new FormData();
    formData.append("image",this.image);
    formData.append("name",this.name);
    formData.append("number",this.number);
    formData.append("wheeler",this.wheeler)
    this.publishrideService.addPublisherDetails(formData).subscribe(data => {
      this.toastr.success("SignUp success","success")
       this.router.navigate(['']);
     },err=>{
      if(err instanceof HttpErrorResponse){
        if(err.status == 500){
          this.toastr.error("Internal Server Error","Error");
        }
      }
     });
  }
}
