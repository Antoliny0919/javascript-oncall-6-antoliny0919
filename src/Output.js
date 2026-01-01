import { Console } from '@woowacourse/mission-utils'


const Output = {
  printError(err) {
    Console.print(`[ERROR] ${err.message}`);
  }
}

export default Output;
