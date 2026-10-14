"use client";

import { useEffect, useRef, useState } from "react";

type Dashboard = {
  id: string;
  label: string;
  title: string;
  summary: string;
  /** Base path in /public/videos — `-1920.mp4`, `-1280.mp4`, `-poster.webp`. */
  video: string;
};

// Screen recordings of the Power BI reports delivered to Sporting Direction.
// Self-hosted so the case study never depends on a public Power BI link.
// Encoded H.264 (plays everywhere, incl. iOS Safari), no audio, faststart;
// phones get the lighter 1280px rendition.
const dashboards: Dashboard[] = [
  {
    id: "performance",
    label: "Performance by discipline",
    title: "Análisis de rendimiento por especialidades — RFEA 2025",
    summary:
      "Scholarship points by discipline and gender, athletes per sector and the full ranked roster — cross-filtered by gender or final scholarship level in one click.",
    video: "/videos/rfea-performance",
  },
  {
    id: "ranking",
    label: "Competition vs World Ranking",
    title: "Análisis de puntos: competición vs. World Ranking — RFEA 2025",
    summary:
      "How much of each athlete's score comes from competition results versus World Ranking position, and the exact gap to the Level 4A / 4B thresholds.",
    video: "/videos/rfea-ranking",
  },
];

const ASPECT = "1920 / 1114";

type FullscreenVideo = HTMLVideoElement & { webkitEnterFullscreen?: () => void };

export default function DashboardTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = dashboards[activeIndex];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onTabKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const step = e.key === "ArrowRight" ? 1 : -1;
    const next = (activeIndex + step + dashboards.length) % dashboards.length;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="not-prose">
      <div
        role="tablist"
        aria-label="Power BI dashboards"
        className="grid grid-cols-2 gap-1 rounded-lg bg-ink/5 p-1"
      >
        {dashboards.map((dashboard, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={dashboard.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${dashboard.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${dashboard.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(i)}
              onKeyDown={onTabKeyDown}
              className={`rounded-md px-3 py-2 text-left text-xs font-medium leading-snug transition-all sm:text-sm ${
                isActive
                  ? "bg-white text-ink shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <span className="mr-1.5 font-semibold text-accent">
                0{i + 1}
              </span>
              {dashboard.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="mt-3"
      >
        <DashboardVideo key={active.id} dashboard={active} />
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          {active.summary}
        </p>
      </div>

      <p className="mt-2 text-xs text-slate-400">
        Screen recording of the live Power BI report ·{" "}
        <span className="sm:hidden">tap ⤢ to view full screen in landscape.</span>
        <span className="hidden sm:inline">click ⤢ to view full screen.</span>
      </p>
    </div>
  );
}

function DashboardVideo({ dashboard }: { dashboard: Dashboard }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<FullscreenVideo>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  // Set when the viewer pauses explicitly, so scrolling back into view
  // doesn't override their choice.
  const userPaused = useRef(false);

  // Autoplay (muted, looped) only while on screen; never for reduced motion.
  useEffect(() => {
    const video = videoRef.current;
    const frame = frameRef.current;
    if (!video || !frame) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) userPaused.current = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) {
          video.play().catch(() => {});
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  // Drive the progress bar from rAF for a smooth fill (timeupdate is ~4Hz).
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    const tick = () => {
      const video = videoRef.current;
      if (video && progressRef.current && video.duration) {
        progressRef.current.style.transform = `scaleX(${
          video.currentTime / video.duration
        })`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  const seek = (e: React.PointerEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    video.currentTime = ratio * video.duration;
    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${ratio})`;
    }
  };

  const enterFullscreen = async () => {
    const frame = frameRef.current;
    const video = videoRef.current;
    if (!frame || !video) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen().catch(() => {});
      return;
    }
    if (frame.requestFullscreen) {
      await frame.requestFullscreen().catch(() => {});
      // Dense tables read far better sideways on phones (Android only —
      // iOS rotates its native player on its own).
      const orientation = screen.orientation as ScreenOrientation & {
        lock?: (o: string) => Promise<void>;
      };
      orientation.lock?.("landscape").catch(() => {});
    } else if (video.webkitEnterFullscreen) {
      // iPhone Safari: element fullscreen is unsupported, use the native player.
      video.webkitEnterFullscreen();
    }
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
    }
  };

  return (
    <div className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-lg shadow-ink/10">
      {/* App-window chrome — frames the recording as the delivered product. */}
      <div className="flex items-center gap-3 border-b border-ink/10 bg-surface-850 px-3 py-2">
        <div aria-hidden className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <p className="min-w-0 flex-1 truncate text-[11px] text-slate-500">
          Power BI · {dashboard.title}
        </p>
      </div>

      <div
        ref={frameRef}
        className="group relative bg-[#E8E8E8] [&:fullscreen]:flex [&:fullscreen]:items-center [&:fullscreen]:bg-black"
      >
        <video
          ref={videoRef}
          className="block w-full cursor-pointer [:fullscreen_&]:max-h-screen [:fullscreen_&]:object-contain"
          style={{ aspectRatio: ASPECT }}
          poster={`${dashboard.video}-poster.webp`}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`Screen recording: ${dashboard.title}`}
          onClick={togglePlay}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source
            src={`${dashboard.video}-1280.mp4`}
            type="video/mp4"
            media="(max-width: 767px)"
          />
          <source src={`${dashboard.video}-1920.mp4`} type="video/mp4" />
        </video>

        {/* Centre play affordance while paused. */}
        {!playing && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label="Play recording"
            className="absolute inset-0 m-auto grid h-14 w-14 place-items-center rounded-full bg-ink/80 text-white shadow-xl backdrop-blur-sm transition-transform hover:scale-105 sm:h-16 sm:w-16"
          >
            <PlayIcon className="ml-0.5 h-6 w-6" />
          </button>
        )}

        {/* Control bar — always visible on touch, on hover/focus with a mouse. */}
        <div
          className={`absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/55 to-transparent px-2 pb-2 pt-6 text-white transition-opacity sm:gap-3 sm:px-3 ${
            playing
              ? "[@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100"
              : ""
          }`}
        >
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause recording" : "Play recording"}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors hover:bg-white/20"
          >
            {playing ? (
              <PauseIcon className="h-4 w-4" />
            ) : (
              <PlayIcon className="h-4 w-4" />
            )}
          </button>

          <div
            role="presentation"
            onPointerDown={seek}
            className="relative h-6 flex-1 cursor-pointer touch-none"
          >
            <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 overflow-hidden rounded-full bg-white/30">
              <div
                ref={progressRef}
                className="h-full origin-left scale-x-0 rounded-full bg-white"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={enterFullscreen}
            aria-label="View full screen"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors hover:bg-white/20"
          >
            <ExpandIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.6-6.86a1 1 0 0 0 0-1.7L9.52 4.3A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}
