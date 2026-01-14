import useSWR, { useSWRConfig } from "swr";
import useListStore from "../stores/useListStore";
import IsList from "./IsList";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ListGroup = () => {
  // const {toggleList, removeList } = useListStore();
  const { data: lists } = useSWR("http://localhost:8000/lists", fetcher);
  const { mutate } = useSWRConfig();

  const handleCheckOnChange = async (el) => {
    await fetch(`http://localhost:8000/lists/${el.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: !el.completed,
      }),
    });

    mutate("http://localhost:8000/lists");
  };

  const handleDelete = async (id) => {
    // removeList(id);
    await fetch(`http://localhost:8000/lists/${id}`, {
      method: "DELETE",
    });

    mutate("http://localhost:8000/lists");
  };

  return (
    <div id="listGroup">
      <IsList />
      {lists &&
        lists.map((el) => (
          <div
            className={`group animate__animated animate__fadeInLeft border mb-3 overflow-hidden border-neutral-700 p-5 flex justify-between items-center`}
            key={el.id}
          >
            <div className="content flex items-center gap-3">
              <input
                checked={el.completed}
                onChange={() => handleCheckOnChange(el)}
                className="list-check accent-neutral-700 w-4 h-4"
                type="checkbox"
              />
              <p
                className={`${
                  el.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {el.task}
              </p>
            </div>
            <div className="control opacity-100 pointer-events-none duration-300 translate-x-[100px] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-x-0 flex gap-1">
              <button
                className="list-del duration-300 active:scale-75"
                onClick={() => handleDelete(el.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 stroke-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListGroup;
