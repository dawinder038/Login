import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';

import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
// import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { SignUpPhoneComponent } from './Components/sign-up-phone/sign-up-phone.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { VerifyOtpComponent } from './Components/verify-otp/verify-otp.component';
import { AuthGuardGuard } from './Services/auth-guard.guard';

const routes: Routes = [
 {path:"home",component:HomeComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"verifyOtp",component:VerifyOtpComponent},
  {path:"signUpPhone",component:SignUpPhoneComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"dashboard",component:DashboardComponent ,canActivate:[AuthGuardGuard]},
  {path:"changePassword",component:ChangePasswordComponent},
  {path:"******",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
