import "./App.css";
import Btn from "./components/Btn/Btn";
import EmergencyAirbornePageBtn from "./components/Btn/EmergencyAirbornePageBtn/EmergencyAirbornePageBtn";

function App() {
  return (
    <div className="App">
      <div>메인 브랜치 시작</div>
      <EmergencyAirbornePageBtn />
      <Btn></Btn>
    </div>
  );
}

export default App;
