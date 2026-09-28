import React, { useState } from 'react';
import {
  Bookmark,
  Heart,
  Trash2,
  ExternalLink,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Cpu,
  BookOpen,
  Film,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { SavedCategory } from '../../types';
import { SourceTag, ResourceLinkButton } from '../common/ResourceBadge';

interface SavedPageProps {
  onExploreCareer: (careerId: string) => void;
  onBrowseLibrary: () => void;
}

export const SavedPage: React.FC<SavedPageProps> = ({
  onExploreCareer,
  onBrowseLibrary
}) => {
  const { savedItems, toggleSaveItem } = useAuth();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: `All Items (${savedItems.length})` },
    { id: 'career', label: `Careers (${savedItems.filter((s) => s.type === 'career').length})` },
    { id: 'course', label: `Courses (${savedItems.filter((s) => s.type === 'course').length})` },
    { id: 'technology', label: `Tech (${savedItems.filter((s) => s.type === 'technology').length})` },
    { id: 'book', label: `Books (${savedItems.filter((s) => s.type === 'book').length})` },
    { id: 'movie', label: `Media (${savedItems.filter((s) => s.type === 'movie').length})` }
  ];

  const filteredItems = activeFilter === 'all'
    ? savedItems
    : savedItems.filter((item) => item.type === activeFilter);

  const getCategoryIcon = (type: SavedCategory) => {
    switch (type) {
      case 'career':
        return Briefcase;
      case 'course':
        return GraduationCap;
      case 'technology':
        return Cpu;
      case 'book':
        return BookOpen;
      case 'movie':
        return Film;
      default:
        return Sparkles;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="rounded-3xl glass-card p-6 sm:p-8 border border-cyan-400/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Bookmark className="w-4 h-4" />
            <span>Personal Knowledge Vault</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Saved Careers & Resources
          </h1>
          <p className="text-xs sm:text-sm text-cyan-100/70 mt-1 max-w-xl font-light">
            Your bookmarked career blueprints, free courses, toolsets, and reading list.
            Stored privately in your browser's local memory.
          </p>
        </div>

        <button
          onClick={onBrowseLibrary}
          className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs sm:text-sm shadow-md shadow-cyan-500/25 flex items-center gap-2 transition-all"
        >
          <span>Discover More Items</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 border ${
              activeFilter === tab.id
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 text-white shadow-sm'
                : 'glass-card border-cyan-500/20 text-slate-300 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Items Grid or Empty State */}
      {filteredItems.length === 0 ? (
        <div className="rounded-3xl glass-card p-12 text-center border border-cyan-500/20 max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-cyan-950/60 border border-cyan-400/30 flex items-center justify-center mx-auto text-cyan-400">
            <Heart className="w-8 h-8 text-cyan-400/70 animate-pulse" />
          </div>
          <h3 className="font-heading text-xl font-bold text-white">
            No saved items in this view
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Click the heart icon on any career roadmap, free course, book, or technology to pin it to your library.
          </p>
          <button
            onClick={onBrowseLibrary}
            className="px-5 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-200 text-xs font-semibold inline-flex items-center gap-2 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>Explore Career Library</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => {
            const Icon = getCategoryIcon(item.type);
            const dateDisplay = new Date(item.savedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            });

            const platform = item.data?.platform || item.data?.provider || (item.type === 'book' ? 'Google Books' : item.type === 'technology' ? 'Official Docs' : item.type === 'movie' ? 'Netflix' : 'Generic');
            const price = item.data?.price || (item.type === 'course' ? (item.data?.isFree ? 'Free' : 'Paid') : item.type === 'technology' ? 'Free' : 'Paid');
            const level = item.data?.level || (item.type === 'technology' ? item.data?.learningCurve : undefined);

            return (
              <div
                key={item.id}
                className="rounded-2xl glass-card p-5 border border-cyan-500/20 flex flex-col justify-between hover:border-cyan-400/40 transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.type}</span>
                    </div>

                    <button
                      onClick={() => toggleSaveItem(item.type, item.data)}
                      className="text-slate-400 hover:text-rose-400 transition-colors p-1"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {item.type !== 'career' && (
                    <div className="mb-2">
                      <SourceTag
                        platform={platform}
                        price={price}
                        level={level}
                        itemType={item.type}
                      />
                    </div>
                  )}

                  <h3 className="font-heading text-base font-bold text-white group-hover:text-cyan-200 transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="text-xs text-cyan-300/80 mt-0.5 font-medium">
                      {item.subtitle}
                    </p>
                  )}

                  {item.data?.summary && (
                    <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                      {item.data.summary}
                    </p>
                  )}

                  {item.data?.description && !item.data?.summary && (
                    <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                      {item.data.description}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-cyan-500/10 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>Saved {dateDisplay}</span>
                  </div>

                  {item.type === 'career' ? (
                    <button
                      onClick={() => onExploreCareer(item.itemId)}
                      className="w-full py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/30 text-xs font-semibold text-cyan-200 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>View Full Career Roadmap</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <ResourceLinkButton
                      title={item.title}
                      platform={platform}
                      directUrl={item.data?.link}
                      itemType={item.type}
                      size="sm"
                      className="w-full"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
