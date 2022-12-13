import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent {
  formHeader="Edit Details"
  showForm=false;
  name:any;
  phoneNo:number | undefined;
  closeForm(){
    this.showForm=false;
    this.clearForm();
  }
  clearForm(){
    this.name=null;
    this.phoneNo=undefined;
  }
  saveMobile(){
    this.showForm=false;
     let body= { 
                  "user": {
                          "name":this.name,
                          "phone_number": this.phoneNo,
                        }
                } 
    
}
}
