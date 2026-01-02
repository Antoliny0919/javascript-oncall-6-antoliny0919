import Input from './Input.js';
import Schedule from './Schedule.js';


class App {
  async run() {
    const [month, day] = await Input.readOnCallDate();
    const [weekdayMember, weekendMember] = await Input.readMemberNames();
    const schedule = new Schedule(month, day, weekdayMember, weekendMember);
    schedule.run();
  }
}

export default App;
