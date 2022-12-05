import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route:Router){ }

login:any= new FormGroup({
      empId:new FormControl(null,[Validators.required,Validators.minLength(7),Validators.maxLength(7)]),
      password:new FormControl(null,[Validators.required,Validators.minLength(4)]),
})
submitLogin(){
  if(this.login.valid){
    this.route.navigate(["/admin"]);
  }
  else{
    alert("Invalid EmpId or Password")
  }
}

}
