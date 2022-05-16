import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private userService: UserService) { }

  user:any;

  ngOnInit(): void {
    this.userService.getUser().subscribe(data=>{
      this.user = data;
      console.log(this.user);
    });
  }
  selectImage(event:any){
    if(event.target.files.length>0)
    this.user.image=event.target.files[0];
  
  }
  doneMethod(id:any){
    let formData =new FormData();
    formData.append("image",this.user.image);
    formData.append("name",this.user.name);
    formData.append("number",this.user.miniBio);
    formData.append("userId",id);
    this.userService.editNMI(formData).subscribe(result=>{
      if(result){
      console.log(result);
         alert("Your Profile is Edit Succefully")
      }
         else
          alert("Failed To Edit profile");
    }
      )
  }
  mobileEdit(id:any){
    
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
