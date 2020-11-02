import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './home/user/user.component';
import { NgbdDatepickerRange} from './home/ngbd-datepicker-range/ngbd-datepicker-range.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeaveComponent } from './leave/leave.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    UserComponent,
    NgbdDatepickerRange,
    LeaveComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'leave', component:LeaveComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'}
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
