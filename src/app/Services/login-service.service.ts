import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  apiurl:any='http://139.59.47.49:4004/api/'

  constructor(private http:HttpClient) { }

  signUpApi(data:any){
    return this.http.post(this.apiurl+"/account/register",data)
  }
  loginApi(data:any){
    return this.http.post(this.apiurl+"account/login",data);
  }
  forgotPasswordApi(data:any){
    return this.http.post(this.apiurl+"account/forgot/password",data)
  }
  resetPasswordApi(data:any){
    return this.http.post(this.apiurl+"account/reset/password",data)
  }
  // http://139.59.47.49:4004/api/account/send/otp
  // signUpPhoneApi(data:any){
  //   return this.http.post(this.apiurl+,data)
  // }
  uploadImage(event: any) {
    let file = event.target.files[0];
    let formData = new FormData();
    formData.append('file', file)
    return this.http.post(this.apiurl + '/upload/image', formData)
  }
}
