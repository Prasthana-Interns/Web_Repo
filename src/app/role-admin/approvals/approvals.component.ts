import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.css']
})
export class ApprovalsComponent implements OnInit {

  showApproval=true;
  removeApproval=false;
  constructor() { }

  ngOnInit(): void {
  }

  acceptEmp(){
    this.showApproval=false;
    alert("approval Accepted");
  }
  rejectEmp(){
    this.showApproval=false;
    alert("approval rejected");
  }
}
