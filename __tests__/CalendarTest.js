import { Day, Calendar } from '../src/Calendar.js'

describe('Calendar Tests', () => {
  test('Calendar last day property test', () => {
    let calendar = new Calendar('2', '월');
    expect(calendar.lastDay).toBe(28);
    calendar = new Calendar('12', '월');
    expect(calendar.lastDay).toBe(31);
    calendar = new Calendar('6', '월');
    expect(calendar.lastDay).toBe(30);
  });

  test('Calendar day list test', () => {
    let calendar = new Calendar('3', '수');
    let dayList = calendar.dayList;
    expect(dayList.length).toBe(31);
    expect(dayList[0].dayStr).toBe('수');
    expect(dayList[0].dayNum).toBe(1);

    expect(dayList[1].dayStr).toBe('목');
    expect(dayList[1].dayNum).toBe(2);

    expect(dayList[2].dayStr).toBe('금');
    expect(dayList[2].dayNum).toBe(3);

    expect(dayList[3].dayStr).toBe('토');
    expect(dayList[3].dayNum).toBe(4);

    expect(dayList[4].dayStr).toBe('일');
    expect(dayList[4].dayNum).toBe(5);

    expect(dayList[5].dayStr).toBe('월');
    expect(dayList[5].dayNum).toBe(6);

    expect(dayList[6].dayStr).toBe('화');
    expect(dayList[6].dayNum).toBe(7);

    expect(dayList[29].dayStr).toBe('목');
    expect(dayList[29].dayNum).toBe(30);

    expect(dayList[30].dayStr).toBe('금');
    expect(dayList[30].dayNum).toBe(31);
  });
});
