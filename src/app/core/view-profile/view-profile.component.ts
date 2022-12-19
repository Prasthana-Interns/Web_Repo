import { Component ,OnChanges,OnInit, SimpleChanges} from '@angular/core';
import { FormBuilder, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpRequestService } from '../../role-admin/http-request.service';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit ,OnChanges {

  employeeData: any;
  id = localStorage.getItem('id');
  _id: any;
 editForm: any;
  constructor(private httpService: HttpRequestService, private router: Router,  ) { }
  
  ngOnInit() {
 
    // this.httpService.get(`users/${this.id}`).subscribe((res) => {
    //   this.employeeData = res
    //   console.log(res)
    // })
    this.getProfile()
    console.log("ngonit view profile")
    
  }
  getProfile() {
    this.httpService.get(`users/${this.id}`).subscribe((res) => {
      this.employeeData = res
      
    })
  }
  
  editEmployee() {
    this.editForm = true;
    this._id = this.id
    console.log(this.employeeData)
    // this.getProfile()
  }
  formInfo(value: any) {
    this.editForm = value
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getProfile()
  }

}
