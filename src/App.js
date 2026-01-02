import Input from './Input.js';
import Schedule from './Schedule.js';


class App {
  async run() {
    const [month, day] = await Input.readOnCallDate();
    const [weekdayMember, weekendMember] = await Input.readMemberNames();
    const oneCallSchedule = new Schedule(month, day, weekdayMember, weekendMember);
  }
}

export default App;
