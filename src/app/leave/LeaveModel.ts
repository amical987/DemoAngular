import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export interface Leave 
{
    id: number;
    leaveType: string;
    specialType: string;
    description: string;
    totalDays: number;
    startDate: Date;
    endDate: Date;
    status: string;
}