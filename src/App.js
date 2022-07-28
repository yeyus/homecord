import './App.css';
import Header from './components/header';
import Widget from './components/widget';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="App-column">
          <Widget label="Housemates">
            <div>Let's have some content</div>
            <div>Let's have some content</div>
            <div>Let's have some content</div>
            <div>Let's have some content</div>
          </Widget>
          <Widget label="Manage Devices">
            <div>Let's have some content</div>
            <div>Let's have some content</div>
            <div>Let's have some content</div>
            <div>Let's have some content</div>
          </Widget>
          <Widget label="Splitwise Payments">
            <div>Let's have some content</div>
            <div>Let's have some content</div>
            <div>Let's have some content</div>
            <div>Let's have some content</div>
          </Widget>
        </div>
        <div className="App-column">
          <Widget label="To Do Lists">
            <div>Let's have some content</div>
            <div>Let's have some content</div>
            <div>Let's have some content</div>
            <div>Let's have some content</div>
          </Widget>
        </div>
        <div className="App-column">
          <Widget label="Air Conditioning">
            <div>Let's have some content</div>
            <div>Let's have some content</div>
            <div>Let's have some content</div>
            <div>Let's have some content</div>
          </Widget>
          <Widget label="Appliances">
            <div>Let's have some content</div>
            <div>Let's have some content</div>
            <div>Let's have some content</div>
            <div>Let's have some content</div>
          </Widget>
          <Widget label="Wifi Management">
            <div>Let's have some content</div>
            <div>Let's have some content</div>
            <div>Let's have some content</div>
            <div>Let's have some content</div>
          </Widget>

          <button>+ Add Widget</button>
        </div>
        
      </main>
    </div>
  );
}

export default App;
