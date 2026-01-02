import { Console } from '@woowacourse/mission-utils'


const Output = {
  printError(err) {
    Console.print(`[ERROR] ${err.message}`);
  },

  printWorkerRecord(worker, day) {
    const dayToPrint = day.publicHoliday ? `${day.dayStr}(휴일)` : day.dayStr;
    Console.print(`${day.month}월 ${day.dayNum}일 ${dayToPrint} ${worker}`);
  }
}

export default Output;
