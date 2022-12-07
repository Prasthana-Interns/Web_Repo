import { Component, Input } from '@angular/core';
import { employees } from '../../employeeModel';


@Component({
  selector: 'app-employee-pop-up',
  templateUrl: './employee-pop-up.component.html',
  styleUrls: ['./employee-pop-up.component.css']
})
export class EmployeePopUpComponent {
  allEmployees=employees;
  @Input()deviceId:any;

  ngOnInit(){
    console.log(this.deviceId);
  }
}
