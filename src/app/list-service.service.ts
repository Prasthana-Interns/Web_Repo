import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListInterface } from './listInterface';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  private urllist:string='assets/emplist/emplistview.json'

  constructor(private http: HttpClient) { }
  
  getlist():Observable<ListInterface[]>
  {
    return this.http.get<ListInterface[]>(this.urllist)
  }

}
