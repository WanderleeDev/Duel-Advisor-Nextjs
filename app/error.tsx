"use client"; // Error boundaries must be Client Components

import { FnVoid } from "@/shared/interfaces/FnVoid.type";
import { useEffect } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: FnVoid;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
