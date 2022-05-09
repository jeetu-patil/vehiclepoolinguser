import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { InterceptorService } from './services/interceptor.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { VerificationOtpComponent } from './verification-otp/verification-otp.component';
import { LoaderComponent } from './loader/loader.component';
import { RideDetailComponent } from './ride-detail/ride-detail.component';
import { VehicledetailComponent } from './vehicledetail/vehicledetail.component';
import { FormsModule } from '@angular/forms';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SocialLoginModule,GoogleLoginProvider } from 'angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileComponent } from './user-profile/user-profile.component';


const socialProvider ={
  provide:"SocialAuthServiceConfig",
  useValue:{
    providers:[{
      id:GoogleLoginProvider.PROVIDER_ID,
      provider:new GoogleLoginProvider("903687778738-tv34dkt0hqr6mbg1s4bja0g2crfchgbm.apps.googleusercontent.com")
    }]
  }
};

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    VerificationOtpComponent,
    LoaderComponent,
    RideDetailComponent,
    VehicledetailComponent,
    VerifyEmailComponent,
    PageNotFoundComponent,
    HomepageComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [socialProvider,AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
