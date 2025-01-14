"use client";

import useCounterStore from "@/zustand/useCounterStore"; // Import the store
import { useRouter } from "next/navigation"; // Import for navigation

export default function Home() {
  const counterValue = useCounterStore((state) => state.counter); // Get the counter state from the store
  const router = useRouter(); // Set up router for navigation
  return (
    <div className="flex flex-col gap-3">
      <button
        className="bg-yellow-100 w-fit text-black p-2"
        onClick={() => router.push("/buttonPage")}
      >
        Go to button page
      </button>
      {/* Render the state of the counter */}
      <div>Current state of the counter: {counterValue}</div>
    </div>
  );
}
