"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Modal from "./Modal";

interface ProjectBoxProps {
  image: StaticImageData;
  url: string;
  title: string;
  description: string;
  tags?: string[];
}

/**
 * Project tile with image, summary, tags, and optional external link.
 * Uses a modal for the full description — interaction container, not decorative card chrome.
 */
const ProjectBox: React.FC<ProjectBoxProps> = ({
  image,
  url,
  description,
  title,
  tags = [],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasLink = Boolean(url?.trim());
  const isLiveSite =
    title === "Connected Algeria" ||
    title === "Zed Academy Landing" ||
    title === "Zed Academy Platform" ||
    Boolean(url && !url.includes("github.com"));

  return (
    <article className="group flex flex-col overflow-hidden border border-theme-card-border bg-theme-card-bg transition-all duration-300 hover:border-theme-accent/40">
      <div className="relative aspect-[16/10] overflow-hidden bg-theme-bg-secondary">
        <Image
          alt={title}
          src={image}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-theme-text-primary">
            {title}
          </h3>
          {hasLink && (
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-theme-text-muted transition-colors hover:text-theme-accent"
              aria-label={isLiveSite ? `Visit ${title}` : `View ${title} code`}
            >
              <ArrowUpRight size={18} />
            </Link>
          )}
        </div>

        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-theme-text-muted">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-theme-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex items-center gap-4 border-t border-theme-border pt-4 text-sm">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="font-medium text-theme-accent transition-colors hover:text-theme-accent-hover"
          >
            Details
          </button>
          {hasLink && (
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-theme-text-secondary transition-colors hover:text-theme-accent"
            >
              {isLiveSite ? "Visit site" : "View code"}
              <ExternalLink size={14} />
            </Link>
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
      />
    </article>
  );
};

export default ProjectBox;
