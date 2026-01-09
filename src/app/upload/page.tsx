"use client";

import ImageCanvas from "@/components/uploadpage/ImageCanvas";
import UploadSheet from "@/components/uploadpage/UploadPage";
import { useContext, useState } from "react";
import { ImageProvider, ImageContext } from "@/context/Context";

export default function Page() {
  // const [image, setImage] = useState<string | null>(null);
  const [fileEnter, setFileEnter] = useState(false);
  const { image, setImage } = useContext(ImageContext);
  return (
    <div className="flex justify-center pt-10">
      {!image ? (
        <UploadSheet fileEnter={fileEnter} setFileEnter={setFileEnter} />
      ) : (
        <ImageCanvas onRetake={() => setImage("")} />
      )}
    </div>
  );
}
