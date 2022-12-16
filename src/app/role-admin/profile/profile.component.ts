import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  employeeData: any;
  id = localStorage.getItem('id');
  isEdit: boolean = false;
  isSave: boolean = false;

  public editForm: any;
  constructor(private httpService: HttpRequestService, private router: Router, private fb: FormBuilder) { }
  
  ngOnInit() {
 
    this.getProfile();
  }
  getProfile() {
    this.httpService.get(`users/${this.id}`).subscribe((res) => {
      console.log(res)
      if (res) {
        this.employeeData = res
        this.formControls()
      };
    })
  }
  formControls() {
    console.log(this.employeeData)
    this.editForm = this.fb.group({
      name: new FormControl(this.employeeData.name, [Validators.required, Validators.minLength(3)]),
      phoneNo: new FormControl(this.employeeData.phone_number, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    })
  }
  editEmployee() {
    this.isEdit = true;
    this.isSave = true
  }
  saveEmployee() {
    if (this.editForm.valid) {
      this.isSave = false
      if (this.editForm.valid) {
        let body = {
          "user": {
            "name": this.editForm.controls.name.value,
            "phone_number": this.editForm.controls.phoneNo.value,
          }
        }
        this.httpService.put(`users/${this.employeeData.id}`, body).subscribe((res: any) => {
          this.getProfile()
          this.isEdit = false;
        });
      }
     
    }
  }
}
