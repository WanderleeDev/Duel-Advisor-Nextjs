export default function ClientUrl() {
  return (
    <span className="error-url block py-4 text-sm tracking-wider font-light underline cursor-not-allowed text-amber-400">
      {window?.location?.href}
    </span>
  );
}
