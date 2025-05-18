import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-neutral-950 to-neutral-800 text-white p-4">
      <main className="text-center">
        <SignInButton forceRedirectUrl={"/drive"} />
      </main>
      <footer className="mt-16 text-sm text-neutral-500">
        © {new Date().getFullYear()} R2 Drive. All rights reserved.
      </footer>
    </div>
  );
}