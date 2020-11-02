import { Component, OnInit } from '@angular/core';
import { User } from './user/UserModel';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private UserService : UserService) { }
  users : User[];
  user : User ={
    id:10000,
    name: 'name',
    email: 'email',
    jobTitle: 'jobTitle',
    department: 'department'
  }
   
  ngOnInit(): void {
    this.UserService.getUser(2).subscribe(user => this.user = user);
    this.getUsers();
  } 

  getUsers()
  {
    this.UserService.getUsers().subscribe(users => this.users = users);  
  } 
}