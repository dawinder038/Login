import { Component, OnInit,TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/Services/login-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  show: boolean = false;

  constructor(private LoginService:LoginServiceService,private router:Router) { }
  

  ngOnInit(): void {
   this.initializeForm();

  }
  initializeForm() {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
}
  login(data:any){
    this.LoginService.loginApi(data).subscribe((result:any)=>{
      console.log(result);
      console.log(result.error)
      sessionStorage.setItem('signUpToken',result.token);
      this.router.navigate(['/dashboard'])
    })
  }
  password() {
    this.show = !this.show;
  }
  get Email(){
    return this.myForm.get('email');
  }
  get Password(){
    return this.myForm.get('password');
  }
}
