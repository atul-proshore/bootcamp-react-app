import React from "react";
import ReactCrop, { type Crop } from "react-image-crop";
import { useState } from "react";
import "react-image-crop/dist/ReactCrop.css";

interface ImageCropProps {
  src: string;
  rotation?: number;
  onSave: (blob: Blob) => void;
}

function ImageCrop({ src, rotation = 0, onSave }: ImageCropProps) {
  const [crop, setCrop] = useState<Crop>({
    unit: "px",
    width: 200,
    height: 200,
    x: 200,
    y: 100,
  });

  const imgRef = React.useRef<HTMLImageElement | null>(null);

  const isVertical = rotation ? rotation % 180 !== 0 : false;

  const cropImage = () => {
    if (!imgRef.current || !crop.width || !crop.height) return;

    const image = imgRef.current;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const pixelRatio = window.devicePixelRatio || 1;

    canvas.width = crop.width * scaleX * pixelRatio;
    canvas.height = crop.height * scaleY * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    canvas.toBlob((blob) => {
      if (blob) onSave(blob);
    }, "image/png");
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
        <img
          src={src}
          className={`rounded block  ${isVertical ? "w-[80vh] h-[80vh]" : ""}`}
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "center center",
            transition: "transform 0.5s ease",
            objectFit: "contain",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </ReactCrop>
      <button
        onClick={cropImage}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Save Crop
      </button>
    </div>
  );
}

export default ImageCrop;
