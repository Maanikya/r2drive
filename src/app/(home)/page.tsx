import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <>
      <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
        R2 Drive
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-md mx-auto text-neutral-400">
        Secure, fast, and easy file storage using Cloudflare R2
      </p>
      <form action={async () => {
        "use server";

        const session = await auth();
        if (!session.userId) {
          return redirect("/sign-in");
        }

        return redirect("/drive");
      }}>
        <Button
          type="submit"
          size={"lg"}
          className="bg-neutral-900 text-white hover:bg-neutral-800 transition-colors border border-neutral-800"
        >
          Get Started
        </Button>
      </form>
      <footer className="mt-16 text-sm text-neutral-500">
        © {new Date().getFullYear()} R2 Drive. All rights reserved.
      </footer>
    </>
  );
}