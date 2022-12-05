import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { devices } from '../model';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  allDevices = devices

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  changecolor(){
    console.log("asdfghjk");
    // this.router.navigate(['add-device'])
  }
}
