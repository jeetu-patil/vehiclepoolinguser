import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { SocialLoginModule, GoogleLoginProvider } from 'angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RidePublishInfoComponent } from './ride-publish-info/ride-publish-info.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { PublisherdetailComponent } from './publisherdetail/publisherdetail.component';
import { HistoryRidesComponent } from './history-rides/history-rides.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchridesComponent } from './searchrides/searchrides.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
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
import { CashingmemoryService } from './services/cashingmemory.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NoRidesFoundComponent } from './no-rides-found/no-rides-found.component';
import { ForgotComponent } from './forgot/forgot.component';

const socialProvider = {
  provide: 'SocialAuthServiceConfig',
  useValue: {
    providers: [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(
          //  '903687778738-tv34dkt0hqr6mbg1s4bja0g2crfchgbm.apps.googleusercontent.com'
          '1001369966895-6h7jafhdsqlk1u6asklf0jbulj8c4h8q.apps.googleusercontent.com'
        ),
      },
    ],
  },
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
    UserProfileComponent,
    RidePublishInfoComponent,
    SuccessMessageComponent,
    PublisherdetailComponent,
    HistoryRidesComponent,
    SearchridesComponent,
    BookridesComponent,
    PublishrideComponent,
    BookhistoryComponent,
    PublishhistoryComponent,
    ConfirmbookerComponent,
    ProfileUserComponent,
    AcceptrequestpageComponent,
    AboutUsComponent,
    AlluserogpublisherComponent,
    VihicleprofileComponent,
    ContactUsComponent,
    ForgotComponent,
    NoRidesFoundComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    MatIconModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [
    socialProvider,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    {
      useClass: CashingmemoryService,
    provide: HTTP_INTERCEPTORS,
    multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
