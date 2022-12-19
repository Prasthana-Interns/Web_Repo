import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.css']
})
export class ApprovalsComponent implements OnInit {

  approvalList:any;
  noRecordFound=false;
  text:any;

  constructor(private httpservice:HttpRequestService) { }

  ngOnInit(): void {
    if(!!localStorage.getItem('token')){
      console.log("present")
    }
    this.sizes();
    this.fetchPendingEmp();
  }
  sizes(){
    if(!!(this.approvalList?.length)){
      this.noRecordFound=true;
      this.text="No pending approvals found"
    }
  }
  fetchPendingEmp(){
      this.httpservice.get(`users/pending`).subscribe((res)=>{
      this.approvalList=res;
      console.log(res)
    },(err)=>{
      this.noRecordFound=true;
      this.text="Something went wrong"
    })
  }
  acceptEmp(id:any){
    const body={
      user:{
        approved:true
      }
    }
    this.httpservice.put(`users/${id}`,body).subscribe((res)=>{
      this.fetchPendingEmp();
    })
  }
  rejectEmp(id:any){
    this.httpservice.delete(`users`,id).subscribe((res)=>{
      this.fetchPendingEmp();
    })

  }
}
