"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Share } from "lucide-react";

export default function ShareButton() {
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    const title = document.title;

    try {
      if (navigator.share) {
        // Kalau browser support Web Share API
        await navigator.share({
          title,
          url,
          text: "Check this out!",
        });
      } else {
        // Fallback: copy ke clipboard
        await navigator.clipboard.writeText(url);
      }

      setShared(true);
      setTimeout(() => setShared(false), 3000);
    } catch (error) {
      console.error("Share cancelled or failed:", error);
    }
  };

  return (
    <Button
      onClick={handleShare}
      variant={"ghost"}
      size={"sm"}
      className="flex lg:flex-row flex-col py-2 items-center text-sm gap-1 lg:gap-3 text-gray-500 hover:text-gray-600 transition-all duration-200"
    >
      <Share className="lg:w-7 lg:h-7 w-5 h-5" />
      {shared ? "Link Ready to Share!" : "Share"}
    </Button>
  );
}
