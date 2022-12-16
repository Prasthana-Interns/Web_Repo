
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
  errorText: any;
  login: any;
  alertMsg:any;
  errorResponse:any;
  constructor(private au: AuthService, private route: Router, private fb: FormBuilder) { }
  
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
        console.log(res);
        localStorage.setItem('token',res?.token)
        localStorage.setItem('id' ,res?.user?.id)
        if((res?.user?.user_roles).length===2) {
          console.log(" FOR BOTH THE ROLES")              
          this.route.navigate(["/admin/admin/employees"]);
        }
        if((res?.user?.user_roles).length===1 && res?.user?.user_roles=='Admin'){
          console.log("FOR THE ADMIN ROLE")  
          this.route.navigate(["/admin/admin/employees"]);
        }
        if(res?.user?.user_roles.length===1 && res?.user?.user_roles=='Employee'){
          console.log("FOR THE EMPLOYEE ROLE")  
          this.route.navigate(["employee/employee-view"]);
        }
      },
      error=>{
        this.errorText=error
        this.errorResponse=this.errorText?.error?.error
      }
      )
    }
    else {
      this.alertMsg="*Invalid login details"; 
    }
  }
} 
