import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  modalRef?: BsModalRef;
  myForm!: FormGroup;
  constructor(private modalService: BsModalService,private Route:Router) { }
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
}
submit(data: any) {
  this.Route.navigate(["login"])
  console.log(data)
}
}