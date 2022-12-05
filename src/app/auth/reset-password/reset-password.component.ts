import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  constructor(private router:Router){ }
  resetPass:any= new FormGroup(
    {
  EmpId:new FormControl(null,[Validators.required,Validators.minLength(7),Validators.maxLength(7)]),
})

submitResetPass(){
if(this.resetPass.valid){
 this.router.navigate(["/login"]);
}
else{
 alert("Invalid EmpId")
}
}
}

