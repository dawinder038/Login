import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login-service.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  modalRef?: BsModalRef;
  myForm!: FormGroup;
  constructor(private modalService: BsModalService, private Route: Router, private LoginService: LoginServiceService) { }
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      mobile_number: new FormControl('', [Validators.required]),
      country_code: new FormControl('', [Validators.required])
    })
  }
  signUp(signUpData: any) {
    let payload = {
      email: signUpData.email,
      password: signUpData.password,
      mobile_number: signUpData.mobile_number,
      country_code: signUpData.country_code,
      device_type: 1,
      device_id: "1",
      fcm_id: "1"
    }
    this.LoginService.signUpApi(payload).subscribe((result: any) => {
      console.log(result)
    });
  }
}