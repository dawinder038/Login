import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { SignUpPhoneComponent } from './Components/sign-up-phone/sign-up-phone.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes = [
 
  {path:"login",component:LoginComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"signUpPhone",component:SignUpPhoneComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"resetPassword",component:ResetPasswordComponent},
  {path:"changePassword",component:ChangePasswordComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
