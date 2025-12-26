"use client";

import { on } from "events";
import { Upload } from "lucide-react";
import { useState } from "react";
import { set } from "react-hook-form";
interface UploadImageProps {
  onUpload: (imageUrl: string) => void;
  fileEnter: boolean;
  setFileEnter: (enter: boolean) => void;
}

export default function UploadImage({
  onUpload,
  fileEnter,
  setFileEnter,
}: UploadImageProps) {
  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setFileEnter(true);
    console.log("file enter:", fileEnter);
  };

  const handleDragLeaveandEnd = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setFileEnter(false);
    console.log("file leave:", fileEnter);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setFileEnter(false);
    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, index) => {
        if (item.kind === "file") {
          const file = item.getAsFile();
          if (file) {
            const url = URL.createObjectURL(file);
            onUpload(url);
          }
        }
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    onUpload(url);
  };

  return (
    <label
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeaveandEnd}
      onDragEnd={handleDragLeaveandEnd}
      onDrop={handleDrop}
      className={`flex cursor-pointer flex-col items-center justify-center
            gap-2 rounded-md
            border-2 border-dashed border-[#006FB7]
            bg-[#E2EEFA] px-6 py-10
            text-center transition hover:bg-[#CAE3FD] ${
              fileEnter ? "border-dashed bg-gray-400" : ""
            }`}
    >
      <input
        type="file"
        accept="image/png,image/jpeg, image/jpg, image/svg+xml"
        hidden
        onChange={handleChange}
      />

      {!fileEnter ? (
        <>
          <Upload className="h-7 w-7 text-[#006FB7]" />

          <p className="text-sm font-medium text-gray-800">
            Click to upload an image
          </p>

          <p className="text-xs text-gray-600">
            JPG, SVG or PNG, max 10MB, landscape preferred
          </p>
        </>
      ) : (
        <>
          <p className="text-sm font-medium text-gray-800">Drop image here</p>
        </>
      )}
    </label>
  );
}
