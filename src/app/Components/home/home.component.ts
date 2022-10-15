import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var FB:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef?: BsModalRef;


  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {
    if (sessionStorage.getItem('loginStatus') == "google") {
      this.loginByGoogle();
    }
  }
  loginByGoogle() {
    let userData = jwt_decode(String(sessionStorage.getItem('googleAuthToken')));
    console.log(userData);
  }

   

fbAsyncInit(){
  FB.init({
    appId      : '{773923640339728}',
    cookie     : true,
    xfbml      : true,
    version    : '{api-version}'
  });
    
  FB.AppEvents.logPageView();   
    
};

second(d:any, s:any, id:any){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }
//  (document, 'script', 'facebook-jssdk'));

}
