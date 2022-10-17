import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/Services/login-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bgImage:any;
  constructor(private uploadImage:LoginServiceService) { }

  ngOnInit(): void {
  }
  imageForm = new FormGroup({
    image: new FormControl('', [Validators.required])
  });
  // fileChange(event: any) {
  //   this.uploadImage.uploadImage(event).subscribe((result: any) => {
  //     this.bgImage = 'http://139.59.47.49:4004/' + result.filename;
  //     this.imageForm.controls['background'].patchValue(result.filename);
  //     // console.log(result);
  //   });
  // }

}
