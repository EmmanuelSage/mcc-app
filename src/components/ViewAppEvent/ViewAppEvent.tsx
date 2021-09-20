import React, { useState } from "react";
import { MccEvent } from "../../MccEvent/MccEvent";

function ViewAppEvent() {
  const events = MccEvent.getEvents();
  const eventsLength = events.length;
  const [state, setState] = useState(eventsLength);

  return (
    <>
      <div className="form-group">
        <button
          onClick={() => {
            if (state - 1 < 0) return;
            setState(state - 1);
          }}
        >
          Prev
        </button>
        <label htmlFor="percentage">
          Slider State
          <code>
            {state + 1}/{eventsLength}
          </code>
          :
        </label>
        <button
          onClick={() => {
            if (state + 1 >= eventsLength) return;
            setState(state + 1);
          }}
        >
          Next
        </button>
        <input
          className="input-block"
          value={state}
          type="range"
          name="percentage"
          id="percentage"
          min="0"
          max={eventsLength - 1}
          onChange={(event) => {
            setState(Number(event.target.value));
          }}
        />
        <output id="output" htmlFor="percentage">
          {state + 1}
        </output>
      </div>

      <pre>
        {eventsLength === 0
          ? null
          : JSON.stringify(events[state], undefined, 2)}
      </pre>
    </>
  );
}

export default ViewAppEvent;
