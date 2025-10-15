import { useState } from "react";
import InputList from "./components/InputList";
import AddList from "./components/AddList";
import ListGroup from "./components/ListGroup";
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
