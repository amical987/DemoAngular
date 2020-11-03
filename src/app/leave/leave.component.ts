import { Component,OnInit } from '@angular/core';;
import { User } from '../home/user/UserModel';
import { LeaveService } from '../leave.service';
import { UserService } from '../user.service';
import { Leave } from './LeaveModel';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  constructor(public userService: UserService, public leaveService: LeaveService) { }
  user : User ={
    id:10000,
    name: 'name',
    email: 'email',
    jobTitle: 'jobTitle',
    department: 'department'
  }

  endDate: number;
  startDate: number;
  Total_Days_Applied: number;
  Total_Days_Applied_Special: number;
  disabled = false;

  leaves: Leave[];
  leave: Leave = {
    id: 1,
    leaveType: '',
    specialType: '',
    description: '',
    totalDays: 25,
    startDate: this.leaveService.from,
    endDate: this.leaveService.to,
    status: 'Sent for Approval'
  }

  ngOnInit(): void {
    this.leaveService.getLeaves().subscribe(leaves => this.leaves = leaves);
    this.userService.getUser(2).subscribe(user => this.user = user);
    this.endDate = this.leaveService.to.getTime();
    this.startDate = this.leaveService.from.getTime();
    }

  addNewLeave(){
    this.updateDays();
    this.leaveService.addLeave(this.leave).subscribe(leave => {
      this.leaves.push(leave);
    });
    this.disabled = true;
  }

  updateDays()
  {
    this.leave.totalDays = this.leaveService.calculateRemainingDays(this.Total_Days_Applied);
    if(!this.Total_Days_Applied)
    {
      this.leave.totalDays = 25;
      this.Total_Days_Applied = this. Total_Days_Applied_Special;
    }
  }

  onSelectedLeave() {
    return this.Total_Days_Applied = 1+(Math.round(this.endDate - this.startDate) / 86400000);
  }

  onSelectedSpecialLeave() {
    if (this.leave.specialType === "Birth of child") {
      this.Total_Days_Applied_Special = 2;
    }
    if (this.leave.specialType === "Marriage") {
      this.Total_Days_Applied_Special = 1;
    }
    if (this.leave.specialType === "Relocation") {
      this.Total_Days_Applied_Special = 3;
    }
    return this.Total_Days_Applied_Special;
  }

}

