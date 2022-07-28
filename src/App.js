import './App.css';
import Header from './components/header';
import Widget from './components/widget';
import HousematesWidget from './components/housemates';
import ManageDevices from './components/manage-devices';
import ToDoList from './components/todo';
import AirConditioning from './components/air-conditioning';
import Appliances from './components/appliances';

import plus from './plus.svg';
import WifiManagement from './components/wifi';

const FAKE_FRIENDS = [
  { id: 202530586709983233, name: 'YeYuS', img: 'http://cdn.discordapp.com/avatars/202530586709983233/c1cd0bd97c3313d7772786e74be113c0.webp?size=80' },
  { id: 82993510503944192, name: 'Shuu', img: 'http://cdn.discordapp.com/avatars/82993510503944192/de4048cba196b37968ec7dca3550068b.webp?size=80' },
  { id: 301969677100515328, name: 'xtopher', img: 'http://cdn.discordapp.com/avatars/301969677100515328/92904214347dbb43d4d1809cb34a4e9a.webp?size=80' },
  { id: 205519959982473217, name: 'afgiel', img: 'http://cdn.discordapp.com/avatars/205519959982473217/0d310d1f6ef1d678c0997a558bcfd758.webp?size=80' },
  { id: 214254037053210624, name: 'Saggitarri', img: 'http://cdn.discordapp.com/avatars/214254037053210624/da9105da18e92fef38b2ed7b82c7d0a2.webp?size=80' },
  { id: 250892381526687765, name: 'zhi', img: 'http://cdn.discordapp.com/avatars/250892381526687765/b6a31b04105c58d34a73a85acc38bebf.webp?size=80' }
];

const FAKE_DEVICES = [
  { id: 1, name: 'Bedroom 01', isActivated: false },
  { id: 2, name: 'Bedroom 02', isActivated: false },
  { id: 3, name: 'Kitchen', isActivated: true },
  { id: 4, name: 'Living Room', isActivated: false }
]

const FAKE_TODOS = [
  { id: 1, label: 'Walk the Dog', isDone: false},
  { id: 2, label: 'Get Groceries at Safeway', isDone: true },
  { id: 3, label: 'Setup new workout equipment', isDone: true },
  { id: 4, label: 'Log Stan\'s 0% parses on XIV', isDone: true },
  { id: 5, label: 'Teach Jake about cardinal directions', isDone: false },
  { id: 6, label: 'Work on floorplan for new bathroom', isDone: false },
  { id: 7, label: 'Clean Kitchen and run dishwasher', isDone: false },
  { id: 8, label: 'Mount new TV to the wall', isDone: false },
  { id: 9, label: 'Run 500 miles in 30 seconds', isDone: false },
  { id: 10, label: 'I want one more list item don\'t read', isDone: false }
]

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="App-column">
          <Widget label="Housemates">
            <HousematesWidget users={FAKE_FRIENDS} />
          </Widget>
          <Widget label="Manage Devices">
            <ManageDevices devices={FAKE_DEVICES} />
          </Widget>
        </div>
        <div className="App-column">
          <Widget label="To Do Lists">
            <ToDoList todos={FAKE_TODOS} />
          </Widget>
        </div>
        <div className="App-column">
          <Widget label="Air Conditioning">
            <AirConditioning initialTemp={65} isActivated={true} />
          </Widget>
          <Widget label="Appliances">
            <Appliances />
          </Widget>
          <Widget label="Wifi Management">
            <WifiManagement />
          </Widget>

          <button className="AddWidget">
            <img src={plus} alt="Add Widget" />
            Add Widget
          </button>
        </div>
        
      </main>
    </div>
  );
}

export default App;
