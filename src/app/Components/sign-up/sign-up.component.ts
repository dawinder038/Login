import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (sessionStorage.getItem('loginStatus') == "google") {
      this.loginByGoogle()
    }
  }

  loginByGoogle() {
    let userData = jwt_decode(String(sessionStorage.getItem('googleAuthToken')));
    console.log(userData);
  }


}
