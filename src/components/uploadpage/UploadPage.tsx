"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnUI/card";
import CameraButton from "./Capture";
import UploadImage from "./UploadImage";

interface UploadSheetProps {
  fileEnter: boolean;
  setFileEnter: (enter: boolean) => void;
}

export default function UploadSheet({
  fileEnter,
  setFileEnter,
}: UploadSheetProps) {
  return (
    <Card
      className={`w-1/2 rounded-lg border border-[#005C98] bg-white shadow-none `}
    >
      <CardHeader className="space-y-1 pb-3">
        <CardTitle className="text-base font-semibold text-gray-900">
          Upload Sheet Image
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Upload or capture a clear image of your sheet for OCR processing
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <UploadImage fileEnter={fileEnter} setFileEnter={setFileEnter} />

        <div className="text-center text-xs text-muted-foreground">or</div>

        <CameraButton />
      </CardContent>
    </Card>
  );
}
