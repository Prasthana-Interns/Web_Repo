import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent  implements OnInit{
  @Input() adminId: any;
  existingData: any;

 editForm = new FormGroup ({
    name: new FormControl(null,[Validators.required]),
    phoneNo: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]), 
  })

  constructor (private httpService :HttpRequestService, private router:Router){ }
 ngOnInit(): void {
   this.getUserDetails();
  } 
  getUserDetails(){
      this.httpService.get(`users/${this.adminId}`).subscribe(response => {
     this.existingData = response;
   })  
  }
 
  showexistingDetails() {
    
  }
  saveChanges() {
  
    this.getUserDetails();
}
  cancelChanges() {
  
}

}
