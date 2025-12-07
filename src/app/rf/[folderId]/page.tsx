import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import UploadR2 from "~/components/ui/Upload";

export default async function FF(props: { params: Promise<{ folderId: string }> }) {
  const params = await props.params;

  const parsedFolderId = parseInt(params.folderId);
  if (isNaN(parsedFolderId)) {
    return <div><h1>Invalid Folder ID</h1></div>
  }

  return (
    <div>
      <SignedIn>
        <SignOutButton />
        <div className="flex justify-center ">
          <form>
            <UploadR2 />
          </form>
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  )
}