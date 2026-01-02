import Input from './Input.js';


class App {
  async run() {
    const [month, day] = await Input.readOnCallDate();
    const [weekdayMember, weekendMember] = await Input.readMemberNames();
    
  }
}

export default App;
