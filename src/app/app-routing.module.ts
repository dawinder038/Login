import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpPhoneComponent } from './Components/sign-up-phone/sign-up-phone.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes = [
  {path:"signUp",component:SignUpComponent},
  {path:"login",component:LoginComponent},
  {path:"signUpPhone",component:SignUpPhoneComponent},
  {path:"**",component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
