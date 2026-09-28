import React from 'react';
import { ExternalLink } from 'lucide-react';
import { getPlatformBadgeConfig, buildResourceLink } from '../../utils/resourceLinks';
import { ExperienceLevel } from '../../types';

interface SourceTagProps {
  platform: string;
  price?: 'Free' | 'Paid' | boolean;
  level?: ExperienceLevel | string;
  itemType?: string;
  showLevel?: boolean;
}

export const SourceTag: React.FC<SourceTagProps> = ({
  platform,
  price = 'Free',
  level,
  itemType,
  showLevel = true
}) => {
  const config = getPlatformBadgeConfig(platform, itemType);
  
  const isFree = typeof price === 'boolean' ? price : price === 'Free';
  const priceLabel = isFree ? 'Free' : 'Paid';

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {/* Platform Pill Badge */}
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide border shadow-sm ${config.badgeClass} ${config.glowClass} transition-all`}
      >
        <span className="text-[12px]">{config.iconEmoji}</span>
        <span>{config.name}</span>
      </span>

      {/* Free / Paid Pill Badge */}
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
          isFree
            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.2)]'
            : 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_8px_rgba(245,158,11,0.2)]'
        }`}
      >
        {priceLabel}
      </span>

      {/* Difficulty Level Pill Badge */}
      {showLevel && level && (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-800/80 text-cyan-200 border border-cyan-500/25">
          {level}
        </span>
      )}
    </div>
  );
};

interface ResourceLinkButtonProps {
  title: string;
  platform: string;
  directUrl?: string;
  itemType?: string;
  customLabel?: string;
  className?: string;
  size?: 'sm' | 'md';
}

export const ResourceLinkButton: React.FC<ResourceLinkButtonProps> = ({
  title,
  platform,
  directUrl,
  itemType,
  customLabel,
  className = '',
  size = 'sm'
}) => {
  const config = getPlatformBadgeConfig(platform, itemType);
  const targetUrl = buildResourceLink(platform, title, directUrl);
  const label = customLabel || config.defaultActionText;

  const sizeClasses = size === 'sm'
    ? 'px-3 py-1.5 text-xs'
    : 'px-4 py-2 text-xs sm:text-sm';

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-1.5 font-semibold rounded-xl border border-cyan-500/30 glass-card bg-slate-900/60 text-cyan-200 hover:text-white transition-all duration-200 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.35)] group ${config.buttonClass} ${sizeClasses} ${className}`}
      title={`${label} - ${title}`}
    >
      <span>{label}</span>
      <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </a>
  );
};
