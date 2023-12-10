import React from "react";
import TaskBoard from "./pages/TaskBoard";
import "./App.css";
import Header from "./components/Header"

function App() {

  return (
    <div className="App">
      <Header/>
      <TaskBoard />
    </div>
  );
}

export default App;
