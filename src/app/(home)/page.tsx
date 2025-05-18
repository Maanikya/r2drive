"use client";

import { SignedIn, SignInButton, SignOutButton } from "@clerk/clerk-react";
import { SignedOut } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  )
}

