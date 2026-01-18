import { useSWRConfig } from "swr";
import useListStore from "../stores/useListStore";

const InputList = () => {
  const { addLists, setInputValue, inputValue } = useListStore();
  const {mutate} = useSWRConfig();

  const handleClick = async() => {
    if (inputValue) {
      const newList = JSON.stringify({
        // id: Date.now(),
        task: inputValue,
        completed: false,
      });

      const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const res = await fetch("http://localhost:8000/lists", {
      method: "POST",
      headers: myHeaders,
      body: newList,
      redirect: "follow",
    });

    const json = await res.json();


      setInputValue("")
      addLists(json);
      console.log(json);

      mutate("http://localhost:8000/lists")
      
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div className="">
      <div>
        <h1 className="font-bold text-4xl mb-2 font-[Pixeboy]" style={{ color: '#6b5b95', letterSpacing: '2px' }}>Todo App</h1>
        <div className="h-1 mb-5" style={{ background: 'linear-gradient(90deg, #b4e7ff, #ffc6b9, #b2e8b9)' }}></div>
      </div>
      <div className="flex mb-5 mt-5 gap-2">
        <input
          value={inputValue}
          onChange={handleChange}
          className="grow pixel-border h-14 px-3 focus-visible:outline-none"
          style={{ borderColor: '#a8d8ea', backgroundColor: '#f0f8ff' }}
          type="text"
          id="textInput"
          placeholder="Add a new task..."
        />
        <button
          onClick={handleClick}
          id="addBtn"
          className="h-14 w-14 pixel-btn flex justify-center items-center"
          style={{ borderColor: '#b4e7ff', backgroundColor: '#b2e8b9', color: '#6b5b95' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 stroke-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

import React from 'react'




export default InputList;
