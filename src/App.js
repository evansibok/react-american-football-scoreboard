//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Scoreboard from './Scoreboard'
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [lionScore, setHomeScore] = useState(0); // Setting and initialing State for home team
  const [tigerScore, setAwayScore] = useState(0); // Setting and initialising state for away team

  // Handler Function
  const handler = (teamName, teamScore) => {
    if (teamName === "Lions") {
      return () => setHomeScore(lionScore + teamScore);
    } else {
      return () => setAwayScore(tigerScore + teamScore);
    }
  };

  return (
    <div className="container">
      <Scoreboard 
      tigerScore={tigerScore}
      lionScore={lionScore}
      />
      
      
      <Buttons handler={handler}/>
      
    </div>
  );
}

export default App;
