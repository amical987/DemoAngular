import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Leave } from './leave/LeaveModel';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  
  Total_Days: number = 25;
  Description: string;
  from : Date;
  to: Date;
  fromDate: NgbDate;
  toDate: NgbDate;
  constructor(private http: HttpClient) { }

  private GetLeavesUrl = 'https://localhost:44329/api/generic/GetLeaves';
  private GetLeaveByIdUrl = 'https://localhost:44329/api/generic/GetLeaveById';
  private AddLeaveUrl = 'https://localhost:44329/api/generic/AddLeave';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getLeave(id: number): Observable<Leave> 
  {
    const url = `${this.GetLeaveByIdUrl}/${id}`;
    return this.http.get<Leave>(url);
  }

  getLeaves() : Observable<Leave[]>
  {
    return this.http.get<Leave[]>(this.GetLeavesUrl);
  }

  addLeave(leave: Leave): Observable<Leave>
  {
    return this.http.post<Leave>(this.AddLeaveUrl, leave, this.httpOptions);
  }

  getDate(From: NgbDate, To: NgbDate)
  {
    this.fromDate = From;
    this.toDate = To;
    this.from = new Date(this.fromDate.year,this.fromDate.month,this.fromDate.day); 
    this.to = new Date(this.toDate.year,this.toDate.month,this.toDate.day); 
  }

  calculateRemainingDays(days: number) {
    return this.Total_Days -= days;
  }
}
