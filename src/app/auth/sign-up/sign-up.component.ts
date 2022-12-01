import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private route:Router){}

  signUp:any = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    phoneNo: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    designation:new FormControl(null,[Validators.required]),
  })

  dropdownList = [
    { item_id: 1, item_text: 'Employee' },
    { item_id: 2, item_text: 'Admin' },
  ];
dropdownSettings = {
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: false,
  };

submitSignUp(){ 
  console.log(this.signUp.value)
this.route.navigate(["/login"]); 
};
}


