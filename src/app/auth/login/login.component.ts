
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms'

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private au: AuthService, private route: Router, private fb: FormBuilder) { }
  login: any;
  alertMsg:any;
  ngOnInit() {
    this.login = this.fb.group({
      empId: new FormControl(null, [Validators.required, Validators.minLength(7), Validators.maxLength(7)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),

    })
    console.log(this.login);
  }

  submitLogin() {
    console.log(this.login)
    if (this.login.valid) {
      let body = {
        "user": {
          "emp_id": this.login.controls.empId.value,
          "password": this.login.controls.password.value
        }    
      }
        this.au.post(`users/signin`,body).subscribe((res: any) => {
        console.log(res)
        localStorage.setItem('token',res.token)
        localStorage.setItem('token', res.token) 
        if (res?.user.user_roles)
        // if (res?.user_roles) {
        //   res?.user_roles.map((res: any) => {
            if ((res?.user.user_roles).length===2) {
              console.log("entered in cdn")              
            this.route.navigate(["/admin/admin/employees"]);
            }
            else  {
              if(res?.user['user_roles'].length===1 && res?.user?.user_roles==='Admin'){
                this.route.navigate(["/admin/admin/employees"]);
              }
              if(res?.user['user_roles'].length===1 && res?.user?.user_roles==='Admin'){
                this.route.navigate(["employee/employee-view"]);
              }
            } 
        // }
        //   )}
      })
      // this.route.navigate(["/admin/admin/employees"]);
    }
    else {
      this.alertMsg="*Invalid login details"; 
    }
  }
} 
