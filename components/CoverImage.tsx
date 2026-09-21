"use client";

import Image from "next/image";
import { useState } from "react";

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * next/image with a graceful fallback frame when the file is missing.
 * Keeps grids and cards looking intentional before real assets are added.
 */
export default function CoverImage({ src, alt, className }: CoverImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 grid place-items-center text-center">
        <span className="text-xs uppercase tracking-widest text-slate-400">
          Cover pending
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 40rem"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
