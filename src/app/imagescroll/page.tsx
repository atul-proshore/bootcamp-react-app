"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";

export default function Page() {
 
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  return (
    <div className="w-[70vw] ml-auto h-[80vh] bg-white flex items-center justify-center p-6">
      <div
        className={`relative bg-white rounded-lg border-4 border-[#97BE0D] shadow-2xl transition-all duration-300
        ${isFullScreen ? "w-full h-full" : "w-[95%] h-[60%]"}`}
      >
        <button
          onClick={() => setIsFullScreen(!isFullScreen)}
          className="absolute top-3 left-3 z-10 bg-[#97BE0D] text-white p-2 rounded-md"
        >
          <Maximize2 size={16} />
        </button>

        <div className="absolute inset-0 p-6">
          <div className="w-full h-full overflow-y-auto overflow-x-hidden bg-gray-50 rounded-md">
            <Image
              src="/img-1.jpg"
              alt="Weekly Tracking Sheet"
              width={2400}
              height={1600}
              className={`w-full ${isFullScreen ? "h-full" : "h-auto"} object-contain`}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
