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
  const validInput = [
    '1,월',
    '준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리',
    '수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니'
  ];

  test('비상 근무 월이 숫자가 아닌 경우 테스트', async() => {
    await runException(['토,월', ...validInput], '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
  });

  test('비상 근무 월이 1 ~ 12내가 아닌 값이 경우 테스트', async() => {
    await runException(['20,월', ...validInput], '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
  });

  test('비상 근무 시작 요일이 잘못된 값인 경우 테스트', async() => {
    await runException(['11,잘못된', ...validInput], '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.');
  });
});

describe('비상 근무 사원 닉네임 입력 예외 테스트', () => {
  test('닉네임이 5자 초과인 입력이 존재하는 경우 테스트', async() => {
    await runException(
      [
        '1,월',
        '준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리,이름이긴이시현',
        '수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니',
        '준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리,이시현',
        '수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니',
      ],
      '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.',
    );
  });
  test('중복된 넥임임 입력이 존재하는 경우 테스트', async() => {
    await runException(
      [
        '1,월',
        '준팍,도밥,고니,수아,루루,글로',
        '수아,수아,글로,고니,도밥,준팍',
        '준팍,도밥,고니,수아,루루,글로',
        '수아,글로,고니,도밥,준팍',
      ],
      '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.',
    );
  });
  test('비상 근무 사원 닉네임 입력이 5명 미만인 경우 테스트', async() => {
    await runException(
      [
        '1,월',
        '준팍,도밥,고니',
        '수아,고니,도밥,준팍',
        '준팍,도밥,고니,수아,루루,글로',
        '수아,글로,고니,도밥,준팍',
      ],
      '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.',
    );
  });
  test('비상 근무 사원 닉네임 입력이 35명 초과인 경우 테스트', async() => {
    await runException(
      [
        '1,월',
        '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,수야,고니,도밥,준팍',
        '수아,고니,도밥,준팍',
        '준팍,도밥,고니,수아,루루,글로',
        '수아,글로,고니,도밥,준팍',
      ],
      '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.',
    );
  });
});
