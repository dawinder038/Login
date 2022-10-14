import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  title = 'Login';
  // ngOnInit(): void {
  //   if (sessionStorage.getItem('loginStatus') == "google") {
  //     this.loginByGoogle()
  //   }
  // }
  // loginByGoogle() {
  //   let userData = jwt_decode(String(sessionStorage.getItem('googleAuthToken')));
  //   console.log(userData)
  // }
}
