import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-sign-up-phone',
  templateUrl: './sign-up-phone.component.html',
  styleUrls: ['./sign-up-phone.component.scss']
})
export class SignUpPhoneComponent implements OnInit {
  myForm!: FormGroup;
  // signUpData:any;

  constructor(private LoginService:LoginServiceService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.myForm = new FormGroup({
      country_code: new FormControl('', [Validators.required]),
      mobile_number: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?) |0)?[0-9]{10}$")]),
    })
}
sendOtp(data:any){
  console.log(data)
  this.LoginService.sendOtpApi(data).subscribe((result:any)=>{
    console.log(result)
    sessionStorage.setItem('mobile_number',data.mobile_number);
  })
}
get Mobile(){
  return this.myForm.get('mobile_number');
}
get Country(){
  return this.myForm.get('country_code');
}


}
