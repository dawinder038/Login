import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/Services/login-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  imageForm!: FormGroup;
  editForm!: FormGroup;
  bgImage: any;
  email: any;
  mobile_number: any;
  firstName: any;
  lastName: any;
  result:any;
  constructor(private uploadImage: LoginServiceService, private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getUserData();
  }
  initializeForm() {
    this.imageForm = new FormGroup({
      image: new FormControl('', [Validators.required]),
    })
    this.editForm = new FormGroup({
      first_name: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      last_name: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      dob: new FormControl('', [Validators.required]),
      mobile_number: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?) |0)?[0-9]{10}$")]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
    })
    this.editForm.disable();  
  }
  fileChange(event: any) {
    this.uploadImage.uploadImage(event).subscribe((result: any) => {
      console.log(result);
      this.bgImage = 'http://139.59.47.49:4004/' + result.filename;
      this.imageForm.controls['image'].patchValue(result.filename);
    });
  }
  submitForm(data: any) {
    console.log(data);
  }
  disableFalse() {
    this.editForm.enable();
  }
  getUserData() {
    this.uploadImage.UserProfileGetApi().subscribe((result: any) => {
      console.log(result);
      this.firstName=result.profile.first_name;
      this.lastName=result.profile.first_name;
      this.email = result.profile.email;
      this.mobile_number = result.profile.mobile_number;
      sessionStorage.setItem('token',result.profile.token);
    });
  }
  editProfile(data: any) {
    console.log(data)
    this.uploadImage.profilePutApi(data).subscribe((result: any) => {
      console.log(result);
      this.result=result;
      this.getUserData();
 
      if(this.result){
        this.showSuccess();
      }
      
    })
  }
  logout(){
    sessionStorage.clear();
    // window.location.reload();
    this.router.navigate(['/signUp'])
  }
  showSuccess() {
    this.toastr.success('Successfully', 'Profile Updated ');
  }
  get first_name(){
    return this.editForm.get('first_name')
  }
  get last_name(){
    return this.editForm.get('last_name');
  }
  get Email(){
    return this.editForm.get('email');
  }
  get DOB(){
    return this.editForm.get('dob');
  }
  get Mobile(){
    return this.editForm.get('mobile_number');
  }
  get Address(){
    return this.editForm.get('address');
  }
}
