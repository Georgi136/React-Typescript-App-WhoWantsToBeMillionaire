import { Navigate, Route, Routes } from "react-router-dom";
import { OptionsScreen } from "./components/OptionsScreen";
import StartScreen from "./components/StartScreen";
import "./styles/App.css";
import { QuestionsScreen } from "./components/QuestionsScreen";

function App() {
  return (
    <div className="game-container">
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/categories" element={<OptionsScreen />} />
        <Route path="/questions" element={<QuestionsScreen />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
