"use client";

import ButtonComp from "../reusableComponents/ButtonComp";

interface ImageCanvasProps {
    image: string;
    onRetake: () => void;
}

export default function ImageCanvas({ image, onRetake }: ImageCanvasProps) {
    const handleEnhance = () => {
        console.log("Enhance image");
    };

    const handleConfirm = () => {
        console.log("Confirm image for OCR");
    };

    return (
        <div className="w-1/2 space-y-4">
        <div className="rounded-lg border border-[#005C98] bg-[#E2EEFA] p-2">
            <img
            src={image}
            alt="Uploaded sheet"
            className="max-h-half w-full rounded object-contain"
            />
        </div>

        <div className="flex justify-between gap-3">

            <div onClick={handleEnhance} className="w-full">
            <ButtonComp
                name="Enhance"
                btnColor="green"
                className="w-full"
                type="button"
            />
            </div>

            <div onClick={onRetake} className="w-full">
            <ButtonComp
                name="Retake"
                btnColor="blue"
                className="w-full"
                type="button"
            />
            </div>

            
            <div onClick={handleConfirm} className="w-full">
            <ButtonComp
                name="Confirm"
                btnColor="green"
                className="w-full"
                type="button"
            />
            </div>
        </div>
        </div>
    );
}
