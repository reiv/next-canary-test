"use client";

import { useState } from "react";

export const Counter = () => {
  const [val, setVal] = useState(0);

  return <div>{val} <button onClick={() => setVal((prev) => prev + 1)}>+</button></div>
}
