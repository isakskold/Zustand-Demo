"use client";
import useCounterStore from "@/zustand/useCounterStore"; // Import the store
import { useRouter } from "next/navigation"; // Import for navigation

const Button = () => {
  const updateCounter = useCounterStore((state) => state.updateCounter); // Get the setter function from the store
  const counter = useCounterStore((state) => state.counter); // Get the counter state from the store
  const router = useRouter(); // Set up router for navigation

  return (
    <div className="flex flex-col justify-center align-middle">
      {/* Navigation button  */}
      <button
        className="bg-yellow-100 w-fit text-black p-2"
        onClick={() => router.push("/")}
      >
        Go to Home
      </button>

      {/* Increment / Decrement buttons + the current state of counter */}
      <div className="flex gap-4 align-middle justify-center">
        <button
          className="bg-yellow-100 w-fit text-black p-2 min-w-8"
          onClick={() => updateCounter("decrement")}
        >
          -
        </button>
        <div className="flex items-center justify-center">{counter}</div>
        <button
          className="bg-yellow-100 w-fit text-black p-2 min-w-8"
          onClick={() => updateCounter("increment")}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default Button;
