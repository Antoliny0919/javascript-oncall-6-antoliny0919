const DAY_TO_NUMBER = {
  '일': 0,
  '월': 1,
  '화': 2,
  '수': 3,
  '목': 4,
  '금': 5,
  '토': 6,
}

const NUMBER_TO_DAY = ['일', '월', '화', '수', '목', '금', '토'];

const PUBLIC_HOLIDAY = {
  '1': [1],
  '2': [],
  '3': [1],
  '4': [],
  '5': [5],
  '6': [6],
  '7': [],
  '8': [15],
  '9': [],
  '10': [3, 9],
  '11': [],
  '12': [25],
}

export class Day {
  constructor(month, dayStr, dayNum) {
    this.month = month;
    this.dayStr = dayStr;
    this.dayNum = dayNum;
    this.holiday = this.#isHoliday(month, dayStr, dayNum);
  }

  #isHoliday(month, dayStr, dayNum) {
    const public_holiday = PUBLIC_HOLIDAY[month];
    if (public_holiday.includes(dayNum)) {
      this.publicHoliday = true;
      return true;
    }
    if (['토', '일'].includes(dayStr)) return true;
    return false;
  }
}


export class Calendar {
  constructor(month, startDay) {
    this.month = month;
    this.startDay = startDay;
    this.lastDay = this.#getLastDay(month);
    const startDayNumber = DAY_TO_NUMBER[startDay];
    this.dayList = this.#createDayList(startDayNumber);
  }

  #getLastDay(month) {
    if (month == '2') {
      return 28;
    }
    const date = new Date(2026, Number(month), 0);
    const lastDay = date.getDate();
    return Number(lastDay);
  }

  #createDayList(startDayNumber) {
    const dayNumberList = [];
    for (let dayNumber = startDayNumber; dayNumber < 7; dayNumber++) {
      dayNumberList.push(dayNumber);
    }
    for (let i = 0; dayNumberList.length <= this.lastDay; i++) {
      dayNumberList.push(i);
      if (i === 6) {
        i = -1;
      }
    }
    const dayList = Array.from(
      {length: this.lastDay},
      (_, i) => {
        return new Day(this.month, NUMBER_TO_DAY[dayNumberList.shift()], i+1)
      }
    );
    return dayList;
  }
}
