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
        <h1 className="font-bold text-4xl font-serif">Todo App</h1>
      </div>
      <div className="flex mb-5 mt-5">
        <input
          value={inputValue}
          onChange={handleChange}
          className="flex-grow border border-neutral-700 h-14 px-3 focus-visible:outline-none"
          type="text"
          id="textInput"
        />
        <button
          onClick={handleClick}
          id="addBtn"
          className="h-14 w-14 bg-neutral-700 text-white flex justify-center items-center active:scale-95 duration-200"
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
