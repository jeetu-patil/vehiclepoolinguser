import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-vehicledetail',
  templateUrl: './vehicledetail.component.html',
  styleUrls: ['./vehicledetail.component.css']
})
export class VehicledetailComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private publishrideService: PublishrideService,private toastr:ToastrService,private router:Router) { }

  name:any
  wheeler:any;
  number:any
  image:any;

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  selectImage(event:any){
    const file = event.target.files[0];
    this.image = file;
  }
  fileV(){
    return !!!this.image;
  }
  submitDetail(){
    let id:any=sessionStorage.getItem("userId");
    let formData =new FormData();
    formData.append("image",this.image);
    formData.append("name",this.name);
    formData.append("number",this.number);
    formData.append("wheeler",this.wheeler)
    formData.append("userId",id);
    this.publishrideService.addPublisherDetails(formData).subscribe(data => {
      this.toastr.success("Detailed success","success")
       this.router.navigate(['publish-info']);
     },err=>{
      if(err instanceof HttpErrorResponse){
        if(err.status == 500){
          this.toastr.error("Internal Server Error","Error");
        }
      }
     });
  }
}
