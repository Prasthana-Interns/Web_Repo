import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPass:any
  alertMsg:any;
  constructor(private router:Router, private fb:FormBuilder, private as:AuthService){ }

ngOnInit() {
  this.resetPass= this.fb.group({
      empId:new FormControl(null,[Validators.required,Validators.minLength(7),Validators.maxLength(7)]),
  })
}

submitResetPass(){
  if(this.resetPass.valid){
  let body={
     "emp_id": this.resetPass.controls.empId.value
    }
    this.as.resetPasswordEmp(body).subscribe((res)=>{
      console.log(res);
      alert(res);
    })

  this.router.navigate(["/login"]);
}
else{
  this.alertMsg="*Invalid EmpId"
}
}
}

