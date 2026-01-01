import Input from './Input.js';


class App {
  async run() {
    const [month, day] = await Input.readOnCallDate();
  }
}

export default App;
