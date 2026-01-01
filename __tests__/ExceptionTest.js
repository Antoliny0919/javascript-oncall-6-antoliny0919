import { Console } from '@woowacourse/mission-utils';
import App from '../src/App';

jest.mock('@woowacourse/mission-utils');

const runException = async (inputs, expectedMessage) => {

  inputs.forEach((input) => {
    Console.readLineAsync.mockResolvedValueOnce(input);
  })

  const app = new App();
  await app.run();

  expect(Console.print).toHaveBeenCalledWith(expectedMessage);
};

describe('비상 근무를 배정할 월과 시작 요일 입력 예외 테스트', () => {
  const validInput = '1,월'
  test('비상 근무 월이 숫자가 아닌 경우 테스트', async() => {
    await runException(['토,월', validInput], '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
  });

  test('비상 근무 월이 1 ~ 12내가 아닌 값이 경우 테스트', async() => {
    await runException(['20,월', validInput], '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
  });

  test('비상 근무 시작 요일이 잘못된 값인 경우 테스트', async() => {
    await runException(['11,잘못된', validInput], '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
  });
});
