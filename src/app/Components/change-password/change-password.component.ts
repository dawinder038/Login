import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup
  constructor(private LoginService: LoginServiceService) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.changePasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
    })
  }
  resetPassword(data:any){
    let data2 =sessionStorage.getItem('token');
    console.log(data2)
    this.LoginService.resetPasswordApi({"token":String(data2),"password":String(data)}).subscribe((result)=>{
      console.log(result);
    });
  }
}
