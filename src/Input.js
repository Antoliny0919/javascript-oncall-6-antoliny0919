import { Console } from '@woowacourse/mission-utils'
import Output from './Output.js';
import { OnCallDateValidator, OnCallMemberValidator } from './Validator.js';


const Input = {
  async readOnCallDate() {
    while(true) {
      try {
        const input = await Console.readLineAsync('비상 근무를 배정할 월과 시작 요일을 입력하세요> ');
        const [month, day] = input.split(',');
        OnCallDateValidator.monthValidate(month);
        OnCallDateValidator.dayValidate(day);
        return [month, day]
      } catch (err) {
        Output.printError(err);
      }
    }
  },
  async readMemberNames() {
    while(true) {
      try {
        const weekdayMemberInput = await Console.readLineAsync('평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ');
        const weekendMemberInput = await Console.readLineAsync('휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ');
        OnCallMemberValidator.validate(weekdayMemberInput, weekendMemberInput);
        return [weekdayMemberInput, weekendMemberInput];
      } catch (err) {
        Output.printError(err);
      }
    }
  }
}

export default Input;
