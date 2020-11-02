import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/message.service';
import { UserService } from 'src/app/user.service';
import {User} from './UserModel'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  UName : string;
  SelectedUser : User;
  constructor( private userService : UserService, private messageService : MessageService) { }
  users:Observable<User[]>;
  ngOnInit(): void {
    //this.users = this.userService.getUsers();
  }
  ShowDetails()
  {
      this.UName = this.UName;
  }
  onSelect(_User : User)
  {
    this.SelectedUser = _User;
  }

  addMessage()
  {
    this.messageService.add("From User");
    console.log("Messages: ", this.messageService.messages);
  }

  clearMessage()
  {
    this.messageService.clear();
    console.log("Messages: ", this.messageService.messages);
  }
}
