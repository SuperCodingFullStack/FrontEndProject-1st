import "./App.css";
import HotFocus from "./components/HotFocus";
import TimeDeal from "./components/TimeDeal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <HotFocus />
          <div className="m-10"></div>
          <TimeDeal />
        </div>
      </header>
    </div>
  );
}

export default App;
