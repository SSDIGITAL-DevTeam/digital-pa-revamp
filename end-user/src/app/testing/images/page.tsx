"use client";

import Image from "next/image";

export default function PreviewImage() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Preview dengan Next.js Image</h2>
      <Image
        src="https://api.digital-pa.com.sg/uploads/image-1758694460530-311580902.jpg"
        alt="Preview"
        width={500}
        height={500}
        className="object-contain rounded-lg shadow-md"
      />
    </div>
  );
}
