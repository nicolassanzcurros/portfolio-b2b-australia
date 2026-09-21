/**
 * Rotating pastel "mat" colors used behind screenshots and card media —
 * echoes a colorful bento-card look while staying muted/premium.
 */
export const tintOrder = ["sage", "terracotta", "sky", "sand"] as const;
export type Tint = (typeof tintOrder)[number];

export const tintBg: Record<Tint, string> = {
  sage: "bg-tint-sage",
  terracotta: "bg-tint-terracotta",
  sky: "bg-tint-sky",
  sand: "bg-tint-sand",
};

export function tintForIndex(i: number): Tint {
  return tintOrder[i % tintOrder.length];
}
