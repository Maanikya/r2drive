"server only";

import { auth } from "@clerk/nextjs/server";
import type { NextRequest } from "next/server";
import { MUTATIONS } from "~/server/db/queries";

export async function POST(request: NextRequest) {
  const user = await auth();
  const data = await request.json();

  if (!user.userId) throw new Error("Unauthorized");

  const res = await MUTATIONS.createFile({
    file: {
      name: data.filename,
      size: data.filesize,
      url: data.fileurl,
      parent: data.parentId
    },
    userId: user.userId
  })

  return Response.json({ res });
}