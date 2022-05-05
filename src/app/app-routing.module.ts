import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationOtpComponent } from './verification-otp/verification-otp.component';
import { RideDetailComponent } from './ride-detail/ride-detail.component'
import { VehicledetailComponent } from './vehicledetail/vehicledetail.component'
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: "sign-in", component: SigninComponent },
  { path: "sign-up", component: SignupComponent},
  { path: "vehicle-detail", component: VehicledetailComponent},
  { path: "verification-otp/:userId", component: VerificationOtpComponent},
  { path: "ridedetail", component: RideDetailComponent},
  { path: "verify-email", component:VerifyEmailComponent},
  { path: "**" , component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
