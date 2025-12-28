"use client"

import { Upload } from "lucide-react"

interface UploadImageProps {
    onUpload: (imageUrl: string) => void
}

export default function UploadImage({ onUpload }: UploadImageProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        const url = URL.createObjectURL(file)
        onUpload(url)
    }

    return (
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-[#006FB7] bg-[#E2EEFA] px-6 py-10 text-center transition hover:bg-[#CAE3FD]">
        <input
            type="file"
            accept="image/png,image/jpeg, image/jpg, image/svg+xml"
            hidden
            onChange={handleChange}
        />

        <Upload className="h-7 w-7 text-[#006FB7]" />

        <p className="text-sm font-medium text-gray-800">
            Click to upload an image
        </p>

        <p className="text-xs text-gray-600">
            JPG, SVG or PNG, max 10MB, landscape preferred
        </p>
        </label>
    )
}
