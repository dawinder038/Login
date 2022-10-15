import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-phone',
  templateUrl: './sign-up-phone.component.html',
  styleUrls: ['./sign-up-phone.component.scss']
})
export class SignUpPhoneComponent implements OnInit {
  myForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.myForm = new FormGroup({
      country_code: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
    })
}
submit(data:any){
  console.log(data);
}
}
