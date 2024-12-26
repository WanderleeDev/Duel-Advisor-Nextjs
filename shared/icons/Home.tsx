import React from "react";

export default function Home({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      fill="#29a2ff"
      viewBox="0 0 511.968 511.968"
      {...props}
    >
      <path
        d="M169.28 0h342.688v342.688H169.28z"
        style={{
          fill: "#e21b1b",
        }}
      />
      <path d="M0 169.28h342.688v342.688H0z" />
    </svg>
  );
}
