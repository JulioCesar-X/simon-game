import SimonBoard from "./components/SimonBoard";
import ScoreDisplay from "./components/ScoreDisplay";
import ControlPanel from "./components/ControlPanel";
import "./App.css";

const App = () => {
  return (
    <div className="simon-container">
      <h1 className="text-3xl font-bold mb-4">Simon Game</h1>
      <ScoreDisplay />
      <SimonBoard />
      <ControlPanel />
    </div>
  );
};

export default App;
