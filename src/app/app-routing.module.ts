import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationOtpComponent } from './verification-otp/verification-otp.component';
import { RideDetailComponent } from './ride-detail/ride-detail.component'
import { VehicledetailComponent } from './vehicledetail/vehicledetail.component'
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RidePublishInfoComponent } from './ride-publish-info/ride-publish-info.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { PublisherdetailComponent } from './publisherdetail/publisherdetail.component';
import { CheckandbookComponent } from './checkandbook/checkandbook.component';
import { AuthGuard } from './auth.guard';
import { RidedetailinfoComponent } from './ridedetailinfo/ridedetailinfo.component';

const routes: Routes = [
  { path: "sign-in", component: SigninComponent },
  { path: "sign-up", component: SignupComponent},
  { path: "", component: HomepageComponent},
  { path: "vehicle-detail",
   component: VehicledetailComponent,
  //  canActivate:[AuthGuard]
  },
  { path: "verification-otp/:userId", component: VerificationOtpComponent},
  { path: "ridedetail",
  component: RideDetailComponent,
  // canActivate:[AuthGuard]
},
  { path: "verify-email", component:VerifyEmailComponent},
  { path: "view-profile" , component:UserProfileComponent},
  { path: "publish-info", component:RidePublishInfoComponent},
  { path: "success" , component:SuccessMessageComponent},
  { path: "publisherdetail" , component:PublisherdetailComponent},
  { path: "checkandbook" , component:CheckandbookComponent},
  // { path: "navbar" , component:NavbarComponent},
  {
    path : "rideinfo",
     component:RidedetailinfoComponent,
    //  canActivate:[AuthGuard]
    },
  { path: "**" , component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
