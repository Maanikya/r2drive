"use client";

import { UploadIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function UploadR2(props: { folderId: number }) {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useRouter();

  // Unique id for accessibility if multiple uploaders are rendered
  const inputId = `file-upload-${props.folderId}`;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setSuccess(null);
    setIsUploading(true);
    const file = e.target.files?.[0];

    if (!file) {
      setError("No file selected.");
      setIsUploading(false);
      return;
    }

    try {
      const uploadRequest = await fetch("/api/files", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ filename: file.name }),
      });

      if (!uploadRequest.ok) throw new Error("Failed to get upload URL");
      const { url }: { url: string } = await uploadRequest.json();
      const uploadRes = await fetch(url, {
        method: "PUT",
        body: file,
      });
      if (!uploadRes.ok) throw new Error("Failed to upload file");

      const updateDb = await fetch("/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: file.name,
          filesize: file.size,
          fileurl: uploadRes.url.split("?")[0],
          parentId: props.folderId,
        }),
      });
      if (!updateDb.ok) throw new Error("Failed to update database");
      setSuccess("File uploaded successfully!");
      // Reset file input so user can upload the same file again if needed
      if (inputRef.current) inputRef.current.value = "";
      navigate.refresh();
    } catch (error: any) {
      setError(error?.message || "Upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex justify-center items-center h-14 bg-gray-800 dark:bg-gray-800 rounded-lg mb-6 w-50">
        <label
          className={`cursor-pointer flex flex-col items-center justify-center space-y-1 text-gray-400 dark:text-gray-400 hover:text-gray-200 dark:hover:text-gray-300 transition-colors ${isUploading ? 'opacity-50 pointer-events-none' : ''}`}
          htmlFor={inputId}
          aria-disabled={isUploading}
        >
          <UploadIcon />
          <span>{isUploading ? "Uploading..." : "Select file"}</span>
        </label>
        <input
          ref={inputRef}
          className="hidden"
          type="file"
          id={inputId}
          disabled={isUploading}
          onChange={handleFileChange}
        />
      </div>
      {error && <div className="text-red-500 text-center mb-2">{error}</div>}
      {success && <div className="text-green-500 text-center mb-2">{success}</div>}
    </div>
  );
}