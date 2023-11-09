import { useState } from "react";

export default function useHasSeenImageCard() {
  const [hasSeen, setHasSeen] = useState(() => {
    // Boolean conversion is done here by comparing the retrieved string with "true"
    return localStorage.getItem("hasSeenImageCard") === "false";
  });

  const setHasSeenImageCardState = (seen) => {
    // Store "true" or "false" as a string directly
    localStorage.setItem("hasSeenImageCard", seen ? "false" : "true");
    setHasSeen(seen); // `seen` is already a boolean, so we can pass it directly
  };

  return [hasSeen, setHasSeenImageCardState];
}
