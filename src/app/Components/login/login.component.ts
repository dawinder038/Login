import { Component, OnInit,TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/Services/login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
  login(data:any){
    this.LoginService.loginApi(data).subscribe((result:any)=>{
      console.log("sign In",result);
      sessionStorage.setItem('signUpToken',result.token);
    })
  }
}
