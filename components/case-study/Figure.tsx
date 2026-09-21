"use client";

import Image from "next/image";
import { useState } from "react";
import { tintBg, type Tint } from "@/lib/tints";

type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
  /** Aspect ratio of the frame, e.g. "16 / 10" (default) or "16 / 9". */
  ratio?: string;
  priority?: boolean;
  /** Wraps the frame in a colored pastel mat, like a bento card. */
  tint?: Tint;
};

export default function Figure({
  src,
  alt,
  caption,
  ratio = "16 / 10",
  priority = false,
  tint,
}: FigureProps) {
  const [failed, setFailed] = useState(false);

  const frame = (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border ${
        tint ? "border-white/70 bg-white" : "border-white/50 bg-surface-850"
      }`}
      style={{ aspectRatio: ratio }}
    >
      {failed ? (
        <div className="absolute inset-0 grid place-items-center p-6 text-center">
          <span className="text-xs uppercase tracking-widest text-slate-500">
            Image pending — add{" "}
            <code className="rounded bg-white/60 px-1 py-0.5 text-slate-600">
              public{src}
            </code>
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );

  return (
    <figure className="my-2">
      {tint ? (
        <div
          className={`rounded-3xl border border-white/60 p-3 shadow-glass sm:p-4 ${tintBg[tint]}`}
        >
          {frame}
        </div>
      ) : (
        <div className="shadow-glass">{frame}</div>
      )}
      {caption && (
        <figcaption className="mt-3 max-w-3xl text-base text-slate-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
