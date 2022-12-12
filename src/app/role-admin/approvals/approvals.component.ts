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
      this.httpservice.get(`users/pending_users`).subscribe((res)=>{
      // console.log(res)
      this.approvalList=res;
    })
  }
  acceptEmp(id:any){
    const body={
      user:{
        approved:true
      }
    }
    this.httpservice.put(`users/${id}`,body).subscribe((res)=>{})
    this.fetchPendingEmp();
  }
  rejectEmp(id:any){
    this.httpservice.delete(`users`,id).subscribe((res)=>{})
    this.fetchPendingEmp();
  }
}
