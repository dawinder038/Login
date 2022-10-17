import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private LoginService:LoginServiceService) { }

  ngOnInit(): void {
   this.initializeForm();
  }
  initializeForm() {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
}
forgotPassword(data:any){
  this.LoginService.forgotPasswordApi(data).subscribe((result)=>{
    console.log(result);
  });
}
}
