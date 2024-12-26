export default function User({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={200}
      height={200}
      fill="#f29a02"
      stroke="#f29a02"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        d="M512 255.616 255.616 512 0 256.384z"
        style={{
          fill: "#e21b1b",
        }}
      />
      <path
        d="M373.552 255.824 255.824 373.552 138.448 256.176z"
        style={{
          fill: "#fff",
        }}
      />
      <path d="M0 256.384 256.384 0 512 255.616z" />
      <path
        d="m138.448 256.176 117.728-117.728 117.376 117.376z"
        style={{
          fill: "#e21b1b",
        }}
      />
    </svg>
  );
}
