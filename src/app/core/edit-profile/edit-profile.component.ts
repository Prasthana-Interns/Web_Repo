import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpRequestService } from '../../role-admin/http-request.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent  implements OnInit{
  @Input() _id: any;
  @Output() public formInfo: EventEmitter<any> = new EventEmitter();
  hasEditForm: boolean = false;
  data: any;

  editForm: any;

  constructor (private httpService :HttpRequestService,private fb: FormBuilder){ }
 ngOnInit(): void {   
  //  this.showexistingDetails()
   this. getProfile() 
  } 
   getProfile() {
    this.httpService.get(`users/${this._id}`).subscribe((res) => {
      console.log(res)
      console.log("get call in edit")
      if (res) {
        this.data = res
        this.formControls()
      };
    })
  }
  // showexistingDetails() {
  //   console.log(this.data)
  //   this.editForm.patchValue({
  //     name: this.data.name,
  //     phoneNo: this.data.phone_number
  //  })
  // }

    formControls() {
    console.log(this._id)
    this.editForm = new FormGroup({
      name: new FormControl(this.data.name, [Validators.required, Validators.minLength(3)]),
      phoneNo: new FormControl(this.data.phone_number, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    })
  }
  saveChanges() {
    if (this.editForm.valid) {
      let body = {
        "user": {
          "name": this.editForm.controls.name.value,
          "phone_number": this.editForm.controls.phoneNo.value,
          "approved":true 
        }
      }
      this.httpService.put(`users/${this._id}`, body).subscribe((res: any) => {
        this.getProfile()
        
       });this.formInfo.emit(this.hasEditForm)
    }
    }
  cancelChanges() {
    this.formInfo.emit(this.hasEditForm)
  }
}
