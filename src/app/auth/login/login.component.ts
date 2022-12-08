
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

      this.au.logInEmp(body).subscribe((res: any) => {
       
        if (res?.userrole) {
          res?.userrole.map((res: any) => {
          
            if (res?.role_type === 'Admin') {
              
            this.route.navigate(["/admin/admin/employees"]);
            }
            else if (res?.role_type === 'Employee') {

            }
          })
        }
        localStorage.setItem('token', res.token)
      })

      this.route.navigate(["/admin/admin/employees"]);
    }
    else {
      this.alertMsg="*Invalid login details"; 

    }
  }
} 
