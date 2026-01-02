import { Calendar } from './Calendar.js';
import Output from './Output.js';


class Schedule {
  constructor(month, day, weekdayMember, weekendMember) {
    this.month = month;
    this.day = day;
    this.weekdayMember = weekdayMember.split(',');
    this.weekendMember = weekendMember.split(',');
    this.currentMonthCalendar = new Calendar(month, day);
  }

  getWorker(day, previousWorker) {
    if (day.holiday) {
      const worker = this.weekendMember[0];
      if (previousWorker === worker) {
        this.weekendMember = [this.weekendMember[1], this.weekendMember[0], ...this.weekendMember.slice(2)];
      }
      return this.weekendMember.shift();
    }
    const worker = this.weekdayMember[0];
    if (previousWorker === worker) {
      this.weekdayMember = [this.weekdayMember[1], this.weekdayMember[0], ...this.weekdayMember.slice(2)];
    }
    return this.weekdayMember.shift();
  }

  run() {
    const dayList = this.currentMonthCalendar.dayList;
    let previousWorker = '';
    dayList.forEach((day) => {
      const worker = this.getWorker(day, previousWorker);
      previousWorker = worker;
      Output.printWorkerRecord(worker, day);
    });
  }
}


export default Schedule;
