import React from "react";

export default function Key({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      fill="#E21B1B"
      stroke="#E21B1B"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        d="M191.312 0v236.648L56.432 101.76V0zM320.688 0v236.648l134.88-134.888V0z"
        style={{
          fill: "#29a2ff",
        }}
      />
      <path d="M235.352 0h41.288v512h-41.288z" />
    </svg>
  );
}
