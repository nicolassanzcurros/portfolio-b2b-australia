"use client";

import { useState } from "react";

type Dashboard = {
  id: string;
  label: string;
  title: string;
  src: string;
};

// Power BI "publish to web" embeds. `&navContentPaneEnabled=false` hides the
// Power BI page-navigation strip (dashboard 2 ships an empty page).
const dashboards: Dashboard[] = [
  {
    id: "performance",
    label: "Performance analysis",
    title: "ANÁLISIS DE RENDIMIENTO POR ESPECIALIDADES - RFEA 2025",
    src: "https://app.powerbi.com/view?r=eyJrIjoiYTEzMTA0YTYtYjY1MS00YmZjLWFkMjAtMTZmMWFlMDIxZGQ0IiwidCI6IjZhZmVhODVkLWMzMjMtNDI3MC1iNjlkLWE0ZmIzOTI3YzI1NCIsImMiOjl9&navContentPaneEnabled=false",
  },
  {
    id: "sources",
    label: "Competition vs World Ranking",
    title: "Análisis datos Sist. puntos",
    src: "https://app.powerbi.com/view?r=eyJrIjoiNjMzNjBkNjItMDc2OC00NjcwLWI3MmQtOWQwOTUwN2IzMzIwIiwidCI6IjZhZmVhODVkLWMzMjMtNDI3MC1iNjlkLWE0ZmIzOTI3YzI1NCIsImMiOjl9&navContentPaneEnabled=false",
  },
];

export default function DashboardTabs() {
  const [activeId, setActiveId] = useState(dashboards[0].id);
  const active = dashboards.find((d) => d.id === activeId) ?? dashboards[0];

  return (
    <div className="not-prose">
      <div
        role="tablist"
        aria-label="Interactive Power BI dashboards"
        className="flex flex-wrap gap-1 border-b border-ink/10"
      >
        {dashboards.map((dashboard) => {
          const isActive = dashboard.id === activeId;
          return (
            <button
              key={dashboard.id}
              type="button"
              role="tab"
              id={`tab-${dashboard.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${dashboard.id}`}
              onClick={() => setActiveId(dashboard.id)}
              className={`-mb-px border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-accent text-ink"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              {dashboard.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="bg-surface-850"
      >
        <iframe
          key={active.id}
          title={active.title}
          src={active.src}
          loading="lazy"
          allowFullScreen
          className="aspect-video w-full rounded-b-lg border-0 shadow-lg"
        />
      </div>

      <p className="mt-3 text-xs text-slate-400">
        Live Power BI embed · best viewed on a larger screen.
      </p>
    </div>
  );
}
