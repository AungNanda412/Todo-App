import { useState } from "react";
import InputList from "./components/InputList.jsx";
import AddList from "./components/AddList.jsx";
import ListGroup from "./components/ListGroup.jsx";
import "animate.css";

function App() {
  return (
    <div className="w-[400px] m-auto mt-16">
      <InputList />
      <AddList />
      <ListGroup />
    </div>
  );
}

export default App;
