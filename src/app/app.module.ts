import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './Components/home/home.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SignUpPhoneComponent } from './Components/sign-up-phone/sign-up-phone.component';
import { HttpClientModule} from '@angular/common/http';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    HomeComponent,
    SignUpComponent,
    SignUpPhoneComponent,
    ChangePasswordComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

   
  ],
  providers:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
