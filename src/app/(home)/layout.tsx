import type React from "react";

export default function HomePage(props: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-neutral-950 to-neutral-800 text-white p-4">
      <main className="text-center">
        {props.children}
      </main>
    </div>
  );
}