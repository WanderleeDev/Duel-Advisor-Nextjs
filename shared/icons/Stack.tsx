import React from "react";

export default function Stack({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={200}
      height={200}
      fill="#fff"
      stroke="#fff"
      viewBox="0 0 512 512"
      {...props}
    >
      <g
        stroke="#CCC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6.144}
      >
        <path
          d="M481.728 360.768 256 512 30.272 360.768 256 209.528z"
          style={{
            fill: "#e21b1b",
          }}
        />
        <path
          d="M481.728 256 256 407.232 30.272 256 256 104.768z"
          style={{
            fill: "#f29a02",
          }}
        />
        <path d="M481.728 151.232 256 302.472 30.272 151.232 256 0z" />
      </g>
      <path
        d="M481.728 360.768 256 512 30.272 360.768 256 209.528z"
        style={{
          fill: "#e21b1b",
        }}
      />
      <path
        d="M481.728 256 256 407.232 30.272 256 256 104.768z"
        style={{
          fill: "#f29a02",
        }}
      />
      <path d="M481.728 151.232 256 302.472 30.272 151.232 256 0z" />
    </svg>
  );
}
