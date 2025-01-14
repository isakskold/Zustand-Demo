import { create } from "zustand";

interface CounterState {
  counter: number;
  updateCounter: (action: "increment" | "decrement") => void;
}

const useCounterStore = create<CounterState>((set) => ({
  // Counter state, initialise as 0
  counter: 0,

  // Counter setter function. Increment or decrement counter value based on what action is set to
  updateCounter: (action) =>
    set((state) => ({
      counter: action === "increment" ? state.counter + 1 : state.counter - 1,
    })),
}));

export default useCounterStore;
