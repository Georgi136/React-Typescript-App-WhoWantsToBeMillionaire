import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import "../styles/startScreen.css";

const StartScreen: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="buttons-container">
      <div>
        <Button
          label="Start Quiz"
          className="start-button"
          onClick={() => {
            navigate("/categories");
          }}
        />
      </div>
    </div>
  );
};

export default StartScreen;
