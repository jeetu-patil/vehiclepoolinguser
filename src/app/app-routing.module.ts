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
import { PublisherdetailComponent } from './publisherdetail/publisherdetail.component';
import { AuthGuard } from './auth.guard';
import { SearchridesComponent } from './searchrides/searchrides.component';
import { BookridesComponent } from './bookrides/bookrides.component';
import { PublishrideComponent } from './publishride/publishride.component';
import { BookhistoryComponent } from './bookhistory/bookhistory.component';
import { PublishhistoryComponent } from './publishhistory/publishhistory.component';
import { ConfirmbookerComponent } from './confirmbooker/confirmbooker.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { AcceptrequestpageComponent } from './acceptrequestpage/acceptrequestpage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AlluserogpublisherComponent } from './alluserogpublisher/alluserogpublisher.component';
import { VihicleprofileComponent } from './vihicleprofile/vihicleprofile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForgotComponent } from './forgot/forgot.component';

const routes: Routes = [
  { path: "", component: HomepageComponent},
  { path:"forgot",component:ForgotComponent},
  { path: "home", component: HomepageComponent},
  { path: "aboutus", component: AboutUsComponent},
  { path: "sign-in", component: SigninComponent},
  { path: "sign-up", component: SignupComponent},
  { path :"searchride/:from/:to/:date/:seat/:ridetype" ,component:SearchridesComponent},
  { path: "vehicle-detail", component: VehicledetailComponent,canActivate:[AuthGuard]},
  { path: "verification-otp/:userId", component: VerificationOtpComponent},
  { path: "ridedetail/:publishId/:seat", component: RideDetailComponent,canActivate:[AuthGuard]
},
  { path: "verify-email", component:VerifyEmailComponent},
  { path: "view-profile" , component:UserProfileComponent,canActivate:[AuthGuard]},
  { path: "publish-info", component:RidePublishInfoComponent,canActivate:[AuthGuard]},
  { path: "success" , component:SuccessMessageComponent},
  { path: "edit-profile", component:ProfileUserComponent},
  { path:"view-vihicle",component:VihicleprofileComponent},
  { path: "bookrides" , component:BookridesComponent,canActivate:[AuthGuard]},
  { path: "publishride", component:PublishrideComponent,canActivate:[AuthGuard]},
  { path: "bookhistory", component: BookhistoryComponent,canActivate:[AuthGuard]},
  { path: "publishhistory", component: PublishhistoryComponent,canActivate:[AuthGuard]},
  { path:'acceptrequest/:rideId',component:AcceptrequestpageComponent,canActivate:[AuthGuard]},
  { path: "confirmbooker/:rideId", component:ConfirmbookerComponent,canActivate:[AuthGuard]},
  { path:"alluserogpublisher/:rideId",component:AlluserogpublisherComponent,canActivate:[AuthGuard]},
  { path: "publisherdetail/:userId" , component:PublisherdetailComponent,canActivate:[AuthGuard]},
  { path: "contact-us" , component:ContactUsComponent},
  { path: "**" , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
