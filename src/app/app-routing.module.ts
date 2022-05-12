import { NgModule, Component } from '@angular/core';
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
import { AuthGuard } from './auth.guard';
import { SearchridesComponent } from './searchrides/searchrides.component';
import { BookridesComponent } from './bookrides/bookrides.component';
import { UserridesComponent } from './userrides/userrides.component';
import { PublishrideComponent } from './publishride/publishride.component';
import { BookhistoryComponent } from './bookhistory/bookhistory.component';
import { PublishhistoryComponent } from './publishhistory/publishhistory.component';
import { ConfirmbookerComponent } from './confirmbooker/confirmbooker.component';

const routes: Routes = [
  { path: "sign-in", component: SigninComponent },
  { path: "bookhistory", component: BookhistoryComponent},
  { path: "publishhistory", component: PublishhistoryComponent},
  { path: "sign-up", component: SignupComponent},
  {path :"searchride/:from/:to/:date/:seat" ,component:SearchridesComponent},
  { path: "", component: HomepageComponent,},
  { path: "vehicle-detail", component: VehicledetailComponent,canActivate:[AuthGuard]},
  { path: "verification-otp/:userId", component: VerificationOtpComponent},
  { path: "ridedetail/:publishId/:seat", component: RideDetailComponent
  // ,canActivate:[AuthGuard]
},
  { path: "verify-email", component:VerifyEmailComponent},
  { path: "view-profile" , component:UserProfileComponent
  // ,canActivate:[AuthGuard]
},
{ path: "confirmbooker", component:ConfirmbookerComponent},
  { path: "publish-info", component:RidePublishInfoComponent,canActivate:[AuthGuard]},
  { path: "success" , component:SuccessMessageComponent},
  { path: "publisherdetail" , component:PublisherdetailComponent
  // ,canActivate:[AuthGuard]
},
{ path: "bookrides" , component:BookridesComponent},
{ path: "publishride", component:PublishrideComponent},
{ path: "userrides", component:UserridesComponent},
  // { path: "navbar" , component:NavbarComponent},
  { path: "**" , component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
