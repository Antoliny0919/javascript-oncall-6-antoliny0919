import Schedule from '../src/Schedule.js';
import { Day } from '../src/Calendar.js';

describe('Schedule Tests', () => {
  test('getWorker Test', () => {
    const schedule = new Schedule(
      '5',
      '월',
      '준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리',
      '수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니',
    );
    let day = new Day('5', '월', '1');
    let worker = schedule.getWorker(day, '');
    expect(worker).toBe('준팍');

    day = new Day('5', '화', '2');
    worker = schedule.getWorker(day, '준팍');
    expect(worker).toBe('도밥');

    day = new Day('5', '수', '3');
    worker = schedule.getWorker(day, '도밥');
    expect(worker).toBe('고니');

    day = new Day('5', '수', '4');
    worker = schedule.getWorker(day, '고니');
    expect(worker).toBe('수아');

    // 어린이날(법정공휴일)
    day = new Day('5', '목', '5');
    worker = schedule.getWorker(day, '수아');
    expect(worker).toBe('루루');

    day = new Day('5', '금', '6');
    worker = schedule.getWorker(day, '루루');
    expect(worker).toBe('글로');

    day = new Day('5', '토', '7');
    worker = schedule.getWorker(day, '글로');
    expect(worker).toBe('수아');
  });
});
