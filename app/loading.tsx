import React from "react";
import SpinnerCard from "@/shared/components/SpinnerCard";

export default function Loading() {
  return (
    <div className="grid place-content-center bg-stone-800 gap-12 min-h-dvh w-full">
      <SpinnerCard />
    </div>
  );
}
