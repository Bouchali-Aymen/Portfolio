"use client";

import { FC, useEffect, useRef, useState } from "react";
import { Calendar, MapPin } from "lucide-react";

interface ExperCardProps {
  position: string;
  location: string;
  description: string;
  date: string;
  index: number;
  isVisible: boolean;
  stack: string[];
}

/**
 * Single experience entry in the timeline.
 */
const ExperCard: FC<ExperCardProps> = ({
  description,
  location,
  position,
  date,
  index,
  isVisible,
  stack,
}) => {
  return (
    <article
      className={`relative grid gap-4 border-l border-theme-border pl-8 transition-all duration-700 ease-out-soft md:grid-cols-[180px_1fr] md:gap-10 md:border-l-0 md:pl-0 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-theme-accent md:hidden" />

      <div className="md:text-right">
        <p className="inline-flex items-center gap-2 text-sm font-medium text-theme-accent md:justify-end">
          <Calendar className="h-3.5 w-3.5 md:hidden" />
          {date}
        </p>
      </div>

      <div className="surface-panel rounded-xl p-6 transition-colors hover:border-theme-accent/40">
        <h3 className="font-display text-xl font-semibold text-theme-text-primary md:text-2xl">
          {position}
        </h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-theme-text-secondary">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-theme-text-muted" />
          {location}
        </p>
        <p className="mt-4 leading-relaxed text-theme-text-muted">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="border border-theme-border px-2.5 py-1 text-xs font-medium text-theme-text-secondary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExperCard;
