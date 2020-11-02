import { Injectable } from '@angular/core';
import {User} from './home/user/UserModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http : HttpClient) { }
  private GetUsersUrl = 'https://localhost:44329/api/generic/GetUsers';
  private GetUserUrl = 'https://localhost:44329/api/generic/getUserById';
  private AddUserUrl = 'https://localhost:44329/api/generic/AddUser';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getUsers() : Observable<User[]>
  {
    return this.http.get<User[]>(this.GetUsersUrl, this.httpOptions);
  }

  getUser(id: number): Observable<User> 
  {
    const url = `${this.GetUserUrl}?Id=${id}`;
    return this.http.get<User>(url, this.httpOptions);
  }

  addUser(user: User): Observable<User> 
  {
    return this.http.post<User>(this.AddUserUrl, user, this.httpOptions)
  }
}