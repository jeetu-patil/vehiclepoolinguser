import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationOtpComponent } from './verification-otp/verification-otp.component';
import { RideDetailComponent } from './ride-detail/ride-detail.component'

const routes: Routes = [
  { path: "sign-in", component: SigninComponent },
  { path: "sign-up", component: SignupComponent},
  { path: "verification-otp", component: VerificationOtpComponent},
  { path: "ridedetail", component: RideDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
