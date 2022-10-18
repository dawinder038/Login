import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  verifyOtpForm!: FormGroup;
  constructor(private LoginService:LoginServiceService) { }
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.verifyOtpForm = new FormGroup({
     otp: new FormControl('', [Validators.required]),
    })
}
verifyOtp(data:any){
  // this.LoginService.verifyOtpApi({})
}
}
