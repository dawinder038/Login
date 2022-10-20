import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var FB: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService, private router: Router) { }

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
    if (userData != 'null') {
      this.router.navigateByUrl('/dashboard');
    }
  }

}
