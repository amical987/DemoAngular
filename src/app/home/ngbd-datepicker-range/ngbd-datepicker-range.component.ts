import {Component} from '@angular/core';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { LeaveService } from 'src/app/leave.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './ngbd-datepicker-range.component.html',
  styleUrls: ['./ngbd-datepicker-range.component.scss']
})
export class NgbdDatepickerRange {

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(calendar: NgbCalendar, public userService: UserService, public leaveService: LeaveService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 0);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  sendToService()
  {
    this.leaveService.getDate(this.fromDate, this.toDate);
  }  
}
