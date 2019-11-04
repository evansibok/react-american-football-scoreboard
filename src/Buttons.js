import React from 'react'

function Buttons({handler}) {

  return (
    <div>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={handler("Lions", 7)}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>
          <button
            onClick={handler("Lions", 3)}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={handler("Tigers", 7)}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>
          <button
            onClick={handler("Tigers", 3)}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
        </div>
      </section>
      
    </div>
  )
}

export default Buttons;