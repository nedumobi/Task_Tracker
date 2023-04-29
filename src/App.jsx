import { useState } from "react";

import Header from "./component/Header";
import Tasks from "./component/Tasks";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
