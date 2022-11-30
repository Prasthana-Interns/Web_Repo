import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(){ }
  
  login:any= new FormGroup(
     {
   uname:new FormControl(null,[Validators.required,Validators.minLength(7),Validators.maxLength(7)]),
   password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
})


}
