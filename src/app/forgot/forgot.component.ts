import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent  {

  

    email:any;
    tempOtp:any;
    otp:any
    userId:any;
    mobile:any;
    publishRideCount:any;
    password:any;
    count:any=0;
    length:any=0;
  
    constructor(private toastr:ToastrService,private router: Router,private userService: UserService,private activatedRoute: ActivatedRoute) { }
    verifyME(){
      this.userService.checkEmai().subscribe(result=>{
        this.length=result.length;
        console.log(this.length);
        for(let em of result){
           
          if(this.email==em.email && this.mobile==em.mobile){
            this.count++;
            this.userId=em._id;
            console.log(em._id);
            alert(" Otp sending on your mobile number ");
               this.userService.getOtp(this.mobile,this.userId).subscribe(data => {
                  this.tempOtp=data.otp;
                  console.log("Thie server Otp"+this.tempOtp);
                  
                })        
         break;
        }
        else
        if(this.count>this.length){
        alert("UnAuthorized user");}

        
      }
    });   

    }
    updatePassword(){
      if(this.otp==this.tempOtp){
        this.userService.forgot(this.password,this.userId).subscribe(data=>{
          if(data){
            alert("your password is changed");
          }
          else
          alert("Server Problem");
        })
      }
      

    }
  
    // emailVerify(){
    //   this.userId=this.activatedRoute.snapshot.paramMap.get('userId');
    //   this.userService.getOtp(this.email,this.userId).subscribe(data => {
    //     this.tempOtp=data.otp;
    //     this.publishRideCount=data.user.publishRideCount;
    //   });
    // }
    // mobileVerify(){
    //   this.userId=this.activatedRoute.snapshot.paramMap.get('userId');
    //   this.userService.getOtp(this.email,this.userId).subscribe(data => {
    //     this.tempOtp=data.otp;
    //     this.publishRideCount=data.user.publishRideCount;
    //   });
    // }
  
    // verifyNumber(){
    //   if(this.tempOtp==this.otp)
    //   {
    //     this.userService.verifyMobile(this.mobile).subscribe(data => {
    //       this.toastr.success("Welcome To RideSharely...","success")
    //       if(this.publishRideCount>0)
    //         return this.router.navigate(['']);
    //       return this.router.navigate(['verify-email']);
    //     });
    //   }
    //   else
    //   {
    //     this.toastr.success("You entered wrong otp plzz enter again...","success")
    //     this.router.navigate(['verification-otp',this.userId]);
    //   }
    // }
  
  }
  



