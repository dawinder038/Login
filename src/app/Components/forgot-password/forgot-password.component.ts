import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { retry } from 'rxjs';
import { LoginServiceService } from 'src/app/Services/login-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  myForm!: FormGroup;


  constructor(private LoginService:LoginServiceService,private toastr:ToastrService) { }

  ngOnInit(): void {
   this.initializeForm();
  }
  initializeForm() {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
    })
}
forgotPassword(data:any){
  this.LoginService.forgotPasswordApi(data).subscribe((result)=>{
    console.log(result);
  });
}
showSuccess() {
  this.toastr.success('Successfully', 'Link sent ');
}
get Email(){
  return this.myForm.get('email');
}
}
