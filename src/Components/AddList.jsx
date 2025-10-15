import React from "react";
import useListStore from "../stores/useListStore";

const AddList = () => {
  const {
    lists,
    getDoneTotal,
  } = useListStore();
  const {done} = getDoneTotal();
  return (
    <div className="flex justify-between mb-5">
      <h3 className="text-2xl font-bold">Your List</h3>
      <div className="flex items-center bg-neutral-700 text-white px-3 rounded-full text-sm py-1">
        Done ( <span id="doneCount">{done}</span> /
        <span id="listCount">{lists.length}</span> )
      </div>
    </div>
  );
};

export default AddList;
