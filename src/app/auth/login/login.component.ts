import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private au:AuthService, private route:Router){ }

login:any= new FormGroup({
      empId:new FormControl(null,[Validators.required,Validators.minLength(7),Validators.maxLength(7)]),
      password:new FormControl(null,[Validators.required,Validators.minLength(4)]),
})
submitLogin(){
  if(this.login.valid){
    // localStorage.setItem('token');
    this.route.navigate(["/admin"]);
  }
  else{
    alert("Invalid EmpId or Password")
  }
}


}