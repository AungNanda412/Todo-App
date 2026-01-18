import React from "react";
import useListStore from "../stores/useListStore";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AddList = () => {
  // const {
  //   lists,
  //   getDoneTotal,
  // } = useListStore();
  // const {done} = getDoneTotal();
  const { data: lists=[] } = useSWR("http://localhost:8000/lists", fetcher);

  const done = lists.filter((el) => el.completed).length

  return (
    <div className="flex justify-between mb-5 items-center">
      <h3 className="text-2xl font-bold font-[Pixeboy]" style={{ color: '#6b5b95' }}>Your List</h3>
      <div className="flex items-center pixel-border px-4 text-sm py-2" style={{ borderColor: '#ffc6b9', backgroundColor: '#f0f8ff', color: '#6b5b95' }}>
        <span>✓ Done: </span><span id="doneCount" className="font-bold mx-1" style={{ color: '#b2e8b9' }}>{done}</span>
        <span>/ </span><span id="listCount" className="font-bold ml-1" style={{ color: '#a8d8ea' }}>{lists.length}</span>
      </div>
    </div>
  );
};

export default AddList;
