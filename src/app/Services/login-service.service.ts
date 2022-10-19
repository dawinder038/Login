import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RouteReuseStrategy } from '@angular/router';



@Injectable({
  providedIn: 'root'

})
export class LoginServiceService {
  apiurl: any = 'http://139.59.47.49:4004/api/'

  constructor(private http: HttpClient) { }

  signUpApi(data: any) {
    return this.http.post(this.apiurl + "/account/register", data)
  }
  loginApi(data: any) {
    return this.http.post(this.apiurl + "account/login", data);
  }
  forgotPasswordApi(data: any) {
    return this.http.post(this.apiurl + "account/forgot/password", data)
  }
  resetPasswordApi(data: any) {
    return this.http.post(this.apiurl + "account/reset/password", data)
  }
  uploadImage(event: any) {
    let file = event.target.files[0];
    let formData = new FormData();
    formData.append('file', file)
    return this.http.post(this.apiurl + 'upload/image', formData)
  }
  UserProfileGetApi() {
    return this.http.get(this.apiurl + "profile")
  }
  profilePutApi(payload: any) {
    return this.http.put(this.apiurl + "edit-profile", payload)
  }
  sendOtpApi(data: any) {
    return this.http.post(this.apiurl + "account/send/otp", data)
  }
  verifyOtpApi(data: any) {
    return this.http.post(this.apiurl + "account/verify/otp", data)
  }
  changePasswordApi(data: any) {
    return this.http.put(this.apiurl + "account/change/password", data)
  }
  isDashboardRight():boolean{
    return true;
  }

}
