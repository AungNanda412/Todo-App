import { create } from "zustand";

const useListStore = create((set, get) => ({
  lists: [],
  addLists: (newList) =>
    set((state) => ({
      lists: [...state.lists, newList],
    })),
  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),
  toggleList: (id) =>
    set((state) => ({
      lists: state.lists.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      ),
    })),
  getDoneTotal: () => {
    const { lists } = get();
    // let doneCount = 0
    // lists.map((el) => {
    //     if(el.completed) doneCount+= 1;
    //     ;
    // })

    // return { doneCount };

    const done = lists.filter((el) => el.completed).length;

    return { done };
  },
  removeList: (id) => set((state) => ({lists : state.lists.filter((el) => el.id != id)})),
}));

export default useListStore;
