import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  EmailAdress : string = "Here will be Email";
  showLogin:boolean = true;
  ShowHome:boolean = false;
  ngOnInit(): void {
  }

Login(text)
  {
    if(text == "Haris")
    {
      this.ToggleShow();
    }
    else
    {
      alert("Incorrect email or password!");
    }
  }

ToggleShow(){
  this.showLogin = !this.showLogin;
  this.ShowHome = !this.ShowHome;
}

}
