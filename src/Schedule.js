import { getOnCallLastDay } from './Utils.js';


class Schedule {
  constructor(month, day, weekdayMember, weekendMember) {
    this.month = month;
    this.day = day;
    this.weekdayMember = weekdayMember.split(',');
    this.weekendMember = weekendMember.split(',');
    const lastDay = getOnCallLastDay(month);
  }
}


export default Schedule;
