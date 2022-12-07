import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unassigned-devices',
  templateUrl: './unassigned-devices.component.html',
  styleUrls: ['./unassigned-devices.component.css']
})
export class UnassignedDevicesComponent {
  constructor(private router: Router) { }
  
  assign() {
    this.router.navigate(['admin/admin/employees/employee-details'])
  }
}
