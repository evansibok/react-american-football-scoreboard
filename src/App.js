//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
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
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      
      <Buttons handler={handler}/>
      
    </div>
  );
}

export default App;
