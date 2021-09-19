import React from "react";
import HomePage from "./components/HomePage/HomePage";
import { DbContext, useValue } from "./context/DbContext";

function App() {
  return (
    <DbContext.Provider value={useValue()}>
      <HomePage/>
    </DbContext.Provider>
  );
}

export default App;
