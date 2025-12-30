"use client";
import ButtonComp from "@/components/reusableComponents/ButtonComp";
import { Button } from "@/components/shadcnUI/button";
import ImageCrop from "@/components/uploadpage/ImageCrop";
import React, { useContext, useState } from "react";
import { ImageContext } from "@/context/Context";

type Tool = "none" | "crop" | "rotate";

export default function Enhancepage() {
  const { image, setImage } = useContext(ImageContext);
  const [activeTool, setActiveTool] = useState<Tool>("none");
  const [rotated, setRotated] = useState(0);
  // const [editedImage, setEditedImage] = useState<string>(image);
  const rotateImage = () => {
    setRotated((prev) => (prev + 90) % 360);
  };

  const handleSave = () => {};

  // whether the image is rotated 90 or 270 degrees (i.e. vertical orientation)
  const isVertical = rotated % 180 !== 0;

  return (
    <div className="flex flex-col items-center gap-3 border border-black">
      <div className="relative w-1/2 space-y-4 overflow-hidden mt-10 border border-red-500">
        <div
          className={` 
           "w-[80vh] h-[80vh] rounded-lg border border-[#005C98] bg-[#E2EEFA] p-5 overflow-visible flex items-center justify-center transition-transform duration-500 ease-in-out`}
        >
          {activeTool === "crop" ? (
            <ImageCrop
              src={image}
              rotation={rotated}
              onSave={(blob) => {
                const url = URL.createObjectURL(blob);
                setImage(url);
                setActiveTool("none");
              }}
            />
          ) : (
            <img
              src={image}
              alt="Uploaded sheet"
              className={`rounded block ${
                isVertical ? "w-[80vh] h-[80vh]" : ""
              }`}
              style={{
                transform: `rotate(${rotated}deg)`,
                transformOrigin: "center center",
                transition: "transform 0.5s ease",
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          )}
        </div>
      </div>
      <div className="flex justify-between gap-3">
        <ButtonComp
          name="Crop"
          onClick={() =>
            setActiveTool((prev) => (prev === "crop" ? "none" : "crop"))
          }
          btnColor={activeTool === "crop" ? "green" : "blue"}
        />
        <ButtonComp name="Rotate" onClick={rotateImage} />
        <ButtonComp name="Save" onClick={handleSave} />
      </div>
    </div>
  );
}
