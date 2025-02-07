import React from "react";

export default function ExagonMenu({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      fill="#fff"
      stroke="#fff"
      transform="scale(1 -1)"
      viewBox="0 0 512 512"
      {...props}
    >
      <g
        stroke="#CCC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.072}
      >
        <path d="M0 65.872 112.08 1.496l112.08 64.376v128.752L112.08 259 0 194.624zM287.84 65.872 399.92 1.496 512 65.872v128.752L399.92 259l-112.08-64.376z" />
        <path
          d="M144.152 317.376 256.232 253l112.08 64.376v128.752l-112.08 64.376-112.08-64.376z"
          style={{
            fill: "#f29a02",
          }}
        />
      </g>
      <path d="M0 65.872 112.08 1.496l112.08 64.376v128.752L112.08 259 0 194.624zM287.84 65.872 399.92 1.496 512 65.872v128.752L399.92 259l-112.08-64.376z" />
      <path
        d="M144.152 317.376 256.232 253l112.08 64.376v128.752l-112.08 64.376-112.08-64.376z"
        style={{
          fill: "#f29a02",
        }}
      />
    </svg>
  );
}
