import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/Services/login-service.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private LoginService:LoginServiceService) { }

  ngOnInit(): void {
   this.initializeForm();
  }
  initializeForm() {
    this.myForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
    })
}
resetPassword(data:any){
  let data2 =sessionStorage.getItem('')
  let payload={
    data2,
    data
  }
  console.log(payload);
  this.LoginService.resetPasswordApi(payload).subscribe((result)=>{
    console.log(result);
  });
}
}
