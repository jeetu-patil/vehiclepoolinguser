import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  constructor(private toastr:ToastrService,private activatedRoute: ActivatedRoute,private userService: UserService,private router: Router) { }
  loadImage:any;
  user:any;
  FileImage:any;
  imageUrl:any;

  ngOnInit(): void {
    this.userService.getUser().subscribe(data=>{
      this.user = data;
      console.log(this.user);
    });
  }
 
  
  doneMethod(id:any){
    let formData =new FormData();

    console.log(this.FileImage)
    formData.append("image",this.FileImage);
    console.log(this.user.image)
    formData.append("imageUrl",this.user.image);
    formData.append("name",this.user.name);
    formData.append("miniBio",this.user.miniBio);
    formData.append("userId",id);
    console.log(formData);
    this.userService.editNMI(formData).subscribe(result=>{
      if(result){
        this.toastr.success("Your profile edit successfully","Success");
      }
         else
         this.toastr.error("Failed to edit your profile","Error");
    }
      )
  }
  selectImage(event:any){
    const file = event.target.files[0];
    console.log(file)
    console.log(this.user)
    this.user.image="";
    var reader = new FileReader();
    
         this.FileImage = event.target.files[0];
         var reader = new FileReader();
         reader.onload = (event:any) => {
           this.imageUrl = event.target.result;   
        }
         reader.readAsDataURL(this.FileImage);
      
    
  }
  mobileEdit(id:any){
    this.router.navigate(['verification-otp',id]);
  }
  emailEdit(id:any){

  }
  getLength(len:any){
    if(len>0)
      return true;
    else  
      return false;
  }

}
