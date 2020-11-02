import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private messageService : MessageService) { }
  Name:string = "Name";

  ChangeName():string
  {
    return this.Name = "This Name is modified";
  }
  ngOnInit(): void {
  }

  addMessage()
  {
    this.messageService.add("From Registraion");
    console.log("Messages: ", this.messageService.messages);
  }
}
