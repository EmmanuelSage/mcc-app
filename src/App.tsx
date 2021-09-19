import React from "react";
import "./App.css";
import TabContainer from "./components/TabContainer/TabContainer";
import { DbContext, useValue } from "./context/DbContext";

function App() {
  return (
    <DbContext.Provider value={useValue()}>
    {/* <DbContext.Provider value={{value, setValue}}> */}
    <div className="App">
      <TabContainer/>
    </div>
    {/* </DbContext.Provider> */}
    </DbContext.Provider>
  );
}

export default App;
