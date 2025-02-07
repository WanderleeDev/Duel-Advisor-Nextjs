import { PropsWithChildren } from "react";

export default function BackgroundBase({
  children,
}: Partial<PropsWithChildren>) {
  return (
    <>
      <div className="bg-gradient-to-b fixed from-blue-900 to-transparent  inset-0 min-h-dvh w-full -z-10 ">
        {""}
      </div>
      <div className="fixed inset-0 -z-20 pointer-events-none bg-gradient-to-b from-pink-900 to-pink-950">
        {children}
      </div>
    </>
  );
}
