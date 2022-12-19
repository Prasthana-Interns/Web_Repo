import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-parent',
  templateUrl: './popup-parent.component.html',
  styleUrls: ['./popup-parent.component.css']
})
export class PopupParentComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.navigate(['core/signup'])
  }

}
