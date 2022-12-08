import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.css']
})
export class ApprovalsComponent implements OnInit {

  approvalList:any;

  constructor(private httpservice:HttpRequestService) { }

  ngOnInit(): void {
    this.fetchPendingEmp();
  }


  fetchPendingEmp(){
    // this.httpservice.getApprovals().subscribe((res)=>{
      this.httpservice.getApprovals().subscribe((res)=>{
      console.log(res)
      this.approvalList=res;
    })
  }
  acceptEmp(id:any){
    const body={
      user:{
        approved:true
      }
    }
    this.httpservice.acceptApproval(id,body).subscribe((res)=>{})
    alert("approval Accepted");
  }
  rejectEmp(){
    
    alert("approval rejected");
  }
}
