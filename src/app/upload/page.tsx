"use client";

import ImageCanvas from "@/components/uploadpage/ImageCanvas";
import UploadSheet from "@/components/uploadpage/UploadPage";
import { useState } from "react";

export default function Page() {
  const [image, setImage] = useState<string | null>(null);
  const [fileEnter, setFileEnter] = useState(false);

  return (
    <div className="flex justify-center pt-10">
      {!image ? (
        <UploadSheet
          onUpload={setImage}
          fileEnter={fileEnter}
          setFileEnter={setFileEnter}
        />
      ) : (
        <ImageCanvas image={image} onRetake={() => setImage(null)} />
      )}
    </div>
  );
}
