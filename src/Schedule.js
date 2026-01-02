class Schedule {
  constructor(month, day, weekdayMember, weekendMember) {
    this.month = month;
    this.day = day;
    this.weekdayMember = weekdayMember.split(',');
    this.weekendMember = weekendMember.split(',');
    this.recordWorkReport = []
  }
}


export default Schedule;
