"use client";

import ButtonComp from "../reusableComponents/ButtonComp";

export default function CameraButton() {
  return (
    <ButtonComp
      name="Capture with Camera"
      btnColor="green"
      className="w-full flex items-center justify-center gap-2"
      type="button"
    />
  );
}

