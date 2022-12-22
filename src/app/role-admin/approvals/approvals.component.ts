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
    this.fetchPendingEmp();
  }
  fetchPendingEmp(){
      this.httpservice.get(`users/pending`).subscribe((res:any)=>{
      this.approvalList=res;
      console.log(res)
      if(res.length==0){
        this.noRecordFound=true;
        this.text="No pending approvals found..."
      }
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
