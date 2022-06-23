import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PublishrideService } from '../services/publishride.service';

@Component({
  selector: 'app-vihicleprofile',
  templateUrl: './vihicleprofile.component.html',
  styleUrls: ['./vihicleprofile.component.css']
})
export class VihicleprofileComponent implements OnInit {
  name:any
  wheeler:any;
  number:any
  image:any;
  imageUrl:any;
  FileImage: any;
  two:any=0;
  four:any=0;

  constructor(private spinner:NgxSpinnerService,private publishrideService: PublishrideService,private toastr:ToastrService,private router:Router) {
    this.publishrideService.getDetailOfPubliisher().subscribe(result=>{
       this.name=result.result.vehicle.name;
       this.wheeler=1
      //  this.wheeler=result.result.vehicle.wheeler;

       this.number=result.result.vehicle.number;
       this.image=result.result.vehicle.image;
       console.log(this.image)

    })
  }


  status1(n:any):boolean{
    if(this.wheeler==4)
      return true;
    else
      return false;
  }

  status(n:any):boolean{
    if(this.wheeler==2)
      return true;
    else
      return false;
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  selectImage(event:any){
    const file = event.target.files[0];
    console.log(file)
    this.image = "";
    var reader = new FileReader();

         this.FileImage = event.target.files[0];
         var reader = new FileReader();
         reader.onload = (event:any) => {
           this.imageUrl = event.target.result;
        }
         reader.readAsDataURL(this.FileImage);


  }

  wheels(n:any){
    console.log(this.wheeler)
  }

  fileV(){
    return !!!this.image;
  }

  submitDetail(){
    let id:any=sessionStorage.getItem("userId");
    let formData =new FormData();
    formData.append("imageUrl",this.image);
    formData.append("image",this.FileImage)
    formData.append("name",this.name);
    formData.append("number",this.number);
    formData.append("wheeler",this.wheeler)
    formData.append("userId",id);
    this.publishrideService.addPublisherDetails(formData).subscribe(data => {
      this.toastr.success("Detailed success","success")
      this.ngOnInit();
           },err=>{
      if(err instanceof HttpErrorResponse){
        if(err.status == 500){
          this.toastr.error("Internal Server Error","Error");
        }
      }
     });
  }
  getLength(len:any){
    if(len>0)
      return true;
    else
      return false;
  }
}
