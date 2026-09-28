import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Heart,
  BookOpen,
  Film,
  Cpu,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Sparkles,
  Tag
} from 'lucide-react';
import { allCareers } from '../../data/careersData';
import { useAuth } from '../../context/AuthContext';
import { SavedCategory } from '../../types';
import { SourceTag, ResourceLinkButton } from '../common/ResourceBadge';
import { detectPlatformKey } from '../../utils/resourceLinks';

interface DiscoverPageProps {
  initialCategory?: string;
  onExploreCareer: (careerId: string) => void;
}

const PLATFORM_FILTER_OPTIONS = [
  { id: 'All', label: 'All Platforms' },
  { id: 'youtube', label: 'YouTube' },
  { id: 'coursera', label: 'Coursera' },
  { id: 'freecodecamp', label: 'freeCodeCamp' },
  { id: 'nptel', label: 'NPTEL' },
  { id: 'cs50', label: 'CS50 / Harvard' },
  { id: 'edx', label: 'edX' },
  { id: 'udemy', label: 'Udemy' },
  { id: 'khanacademy', label: 'Khan Academy' },
  { id: 'officialdocs', label: 'Official Docs' },
  { id: 'googlebooks', label: 'Google Books' },
  { id: 'netflix', label: 'Streaming Media' }
];

export const DiscoverPage: React.FC<DiscoverPageProps> = ({
  initialCategory = 'all',
  onExploreCareer
}) => {
  const { toggleSaveItem, isItemSaved } = useAuth();
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');
  const [selectedPricing, setSelectedPricing] = useState<string>('All'); // 'All' | 'Free' | 'Paid'

  // Flatten all courses, technologies, books, and movies
  const allCourses = useMemo(() => {
    return allCareers.flatMap((c) =>
      c.courses.map((course) => ({
        ...course,
        parentCareer: c.title,
        careerId: c.id,
        categoryType: 'course' as SavedCategory
      }))
    );
  }, []);

  const allTechnologies = useMemo(() => {
    return allCareers.flatMap((c) =>
      c.technologies.map((tech) => ({
        ...tech,
        parentCareer: c.title,
        careerId: c.id,
        categoryType: 'technology' as SavedCategory
      }))
    );
  }, []);

  const allBooks = useMemo(() => {
    return allCareers.flatMap((c) =>
      c.books.map((book) => ({
        ...book,
        parentCareer: c.title,
        careerId: c.id,
        categoryType: 'book' as SavedCategory
      }))
    );
  }, []);

  const allMovies = useMemo(() => {
    return allCareers.flatMap((c) =>
      c.movies.map((movie) => ({
        ...movie,
        parentCareer: c.title,
        careerId: c.id,
        categoryType: 'movie' as SavedCategory
      }))
    );
  }, []);

  // Filtered Careers
  const filteredCareers = useMemo(() => {
    return allCareers.filter((c) => {
      const matchSearch =
        !searchQuery ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchDiff =
        selectedDifficulty === 'All' || c.difficulty === selectedDifficulty;

      return matchSearch && matchDiff;
    });
  }, [searchQuery, selectedDifficulty]);

  // Filtered Courses
  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchSearch =
        !searchQuery ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchDiff =
        selectedDifficulty === 'All' || course.level === selectedDifficulty;

      const pKey = detectPlatformKey(course.platform || course.provider, 'course');
      const matchPlatform =
        selectedPlatform === 'All' || pKey === selectedPlatform;

      const isFree = course.price ? course.price === 'Free' : course.isFree !== false;
      const matchPrice =
        selectedPricing === 'All' ||
        (selectedPricing === 'Free' && isFree) ||
        (selectedPricing === 'Paid' && !isFree);

      return matchSearch && matchDiff && matchPlatform && matchPrice;
    });
  }, [allCourses, searchQuery, selectedDifficulty, selectedPlatform, selectedPricing]);

  // Filtered Technologies
  const filteredTechnologies = useMemo(() => {
    return allTechnologies.filter((tech) => {
      const matchSearch =
        !searchQuery ||
        tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.whyImportant.toLowerCase().includes(searchQuery.toLowerCase());

      const pKey = detectPlatformKey(tech.platform || 'Official Docs', 'technology');
      const matchPlatform =
        selectedPlatform === 'All' || pKey === selectedPlatform;

      const matchPrice =
        selectedPricing === 'All' || selectedPricing === 'Free';

      return matchSearch && matchPlatform && matchPrice;
    });
  }, [allTechnologies, searchQuery, selectedPlatform, selectedPricing]);

  // Filtered Books
  const filteredBooks = useMemo(() => {
    return allBooks.filter((book) => {
      const matchSearch =
        !searchQuery ||
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase());

      const pKey = detectPlatformKey(book.platform || 'Google Books', 'book');
      const matchPlatform =
        selectedPlatform === 'All' || pKey === selectedPlatform;

      const matchPrice =
        selectedPricing === 'All' || selectedPricing === 'Paid';

      return matchSearch && matchPlatform && matchPrice;
    });
  }, [allBooks, searchQuery, selectedPlatform, selectedPricing]);

  // Filtered Movies
  const filteredMovies = useMemo(() => {
    return allMovies.filter((movie) => {
      const matchSearch =
        !searchQuery ||
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.relevance.toLowerCase().includes(searchQuery.toLowerCase());

      const pKey = detectPlatformKey(movie.platform || 'Netflix', 'movie');
      const matchPlatform =
        selectedPlatform === 'All' || pKey === selectedPlatform;

      const matchPrice =
        selectedPricing === 'All' || selectedPricing === 'Paid';

      return matchSearch && matchPlatform && matchPrice;
    });
  }, [allMovies, searchQuery, selectedPlatform, selectedPricing]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Search & Header */}
      <div className="rounded-3xl glass-card p-6 sm:p-8 border border-cyan-400/25">
        <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          NEXORA Global Career Library
        </h1>
        <p className="text-xs sm:text-sm text-cyan-100/70 mt-1 max-w-2xl font-light">
          Browse verified careers, free university courses, modern tech stacks, literature, and cinema with instant access links.
        </p>

        {/* Filter controls row */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search careers, skills, books, courses, or movies..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-card border border-cyan-500/25 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div className="sm:col-span-3 flex items-center gap-2">
            <Filter className="w-4 h-4 text-cyan-400 shrink-0" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl glass-card border border-cyan-500/25 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 cursor-pointer bg-[#051333]"
            >
              <option value="All" className="bg-slate-900">All Experience Levels</option>
              <option value="Beginner" className="bg-slate-900">Beginner Friendly</option>
              <option value="Intermediate" className="bg-slate-900">Intermediate</option>
              <option value="Advanced" className="bg-slate-900">Advanced / Specialization</option>
            </select>
          </div>

          <div className="sm:col-span-3 flex items-center gap-2">
            <Tag className="w-4 h-4 text-cyan-400 shrink-0" />
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl glass-card border border-cyan-500/25 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 cursor-pointer bg-[#051333]"
            >
              <option value="All" className="bg-slate-900">All Pricing (Free & Paid)</option>
              <option value="Free" className="bg-slate-900">100% Free Only</option>
              <option value="Paid" className="bg-slate-900">Paid / Premium Only</option>
            </select>
          </div>
        </div>

        {/* Platform Filter Chips */}
        <div className="mt-4 pt-4 border-t border-cyan-500/15">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-2">
            <span>Filter by Source Platform:</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {PLATFORM_FILTER_OPTIONS.map((plat) => {
              const isActive = selectedPlatform === plat.id;
              return (
                <button
                  key={plat.id}
                  onClick={() => setSelectedPlatform(plat.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all shrink-0 border ${
                    isActive
                      ? 'bg-cyan-500/30 border-cyan-400 text-white shadow-sm shadow-cyan-500/30'
                      : 'bg-slate-900/60 border-cyan-500/20 text-slate-300 hover:text-white hover:border-cyan-400/50'
                  }`}
                >
                  {plat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-1">
          {[
            { id: 'all', label: 'All Items', icon: Sparkles },
            { id: 'career', label: `Careers (${filteredCareers.length})`, icon: Briefcase },
            { id: 'course', label: `Courses (${filteredCourses.length})`, icon: GraduationCap },
            { id: 'technology', label: `Technologies (${filteredTechnologies.length})`, icon: Cpu },
            { id: 'book', label: `Books (${filteredBooks.length})`, icon: BookOpen },
            { id: 'movie', label: `Media (${filteredMovies.length})`, icon: Film }
          ].map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 flex items-center gap-1.5 border ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 text-white shadow-md shadow-cyan-500/25'
                    : 'glass-card border-cyan-500/20 text-slate-300 hover:text-white hover:border-cyan-400/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. CAREERS SECTION */}
      {(activeCategory === 'all' || activeCategory === 'career') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>Career Paths ({filteredCareers.length})</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCareers.map((c) => {
              const isSaved = isItemSaved(c.id);
              return (
                <div
                  key={c.id}
                  className="rounded-2xl glass-card glass-card-hover p-5 border border-cyan-500/20 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                        {c.category}
                      </span>
                      <button
                        onClick={() => toggleSaveItem('career', c)}
                        className="text-slate-400 hover:text-rose-400 transition-colors p-1"
                        aria-label="Save career"
                      >
                        <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-400 text-rose-400' : ''}`} />
                      </button>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-white mb-1.5">
                      {c.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                      {c.summary}
                    </p>

                    <div className="text-xs text-slate-400 pb-2 border-b border-cyan-500/10 flex items-center justify-between">
                      <span>Salary (India):</span>
                      <span className="font-bold text-cyan-200">
                        {c.salaryRangeINR.averageDisplay}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onExploreCareer(c.id)}
                    className="mt-4 w-full py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/30 text-xs font-semibold text-cyan-200 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View 5-Stage Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 2. COURSES SECTION */}
      {(activeCategory === 'all' || activeCategory === 'course') && (
        <section className="space-y-4">
          <h2 className="font-heading text-xl font-bold text-white flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <span>Curated Free Courses & Guides ({filteredCourses.length})</span>
          </h2>

          {filteredCourses.length === 0 ? (
            <p className="text-xs text-slate-400 italic">No courses match the selected filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredCourses.slice(0, activeCategory === 'all' ? 8 : 40).map((course, idx) => {
                const isSaved = isItemSaved(course.id);
                const platform = course.platform || course.provider;
                return (
                  <div
                    key={`${course.id}-${idx}`}
                    className="rounded-xl glass-card p-4 border border-cyan-500/15 flex flex-col justify-between hover:border-cyan-400/40 transition-all"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-1 mb-2">
                        <SourceTag
                          platform={platform}
                          price={course.price || (course.isFree ? 'Free' : 'Paid')}
                          level={course.level}
                          itemType="course"
                        />
                        <button
                          onClick={() => toggleSaveItem('course', course)}
                          className="text-slate-400 hover:text-rose-400 transition-colors shrink-0 p-1"
                          aria-label="Save course"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-400 text-rose-400' : ''}`} />
                        </button>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2">
                        {course.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                        {course.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-cyan-500/10 flex flex-col gap-2">
                      <span className="text-[11px] text-slate-400">Duration: {course.duration}</span>
                      <ResourceLinkButton
                        title={course.title}
                        platform={platform}
                        directUrl={course.link}
                        itemType="course"
                        size="sm"
                        className="w-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* 3. TECHNOLOGIES SECTION */}
      {(activeCategory === 'all' || activeCategory === 'technology') && (
        <section className="space-y-4">
          <h2 className="font-heading text-xl font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <span>Technologies & Developer Toolchains ({filteredTechnologies.length})</span>
          </h2>

          {filteredTechnologies.length === 0 ? (
            <p className="text-xs text-slate-400 italic">No technologies match the selected filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredTechnologies.slice(0, activeCategory === 'all' ? 8 : 40).map((tech, idx) => {
                const isSaved = isItemSaved(tech.id);
                const difficultyLevel = tech.learningCurve === 'High' ? 'Advanced' : tech.learningCurve === 'Medium' ? 'Intermediate' : 'Beginner';
                return (
                  <div
                    key={`${tech.id}-${idx}`}
                    className="rounded-xl glass-card p-4 border border-cyan-500/15 flex flex-col justify-between hover:border-cyan-400/40 transition-all"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-1 mb-2">
                        <SourceTag
                          platform="Official Docs"
                          price="Free"
                          level={difficultyLevel}
                          itemType="technology"
                        />
                        <button
                          onClick={() => toggleSaveItem('technology', tech)}
                          className="text-slate-400 hover:text-rose-400 transition-colors shrink-0 p-1"
                          aria-label="Save tech"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-400 text-rose-400' : ''}`} />
                        </button>
                      </div>

                      <div className="text-[10px] text-cyan-300/80 font-medium mb-1">
                        {tech.category}
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-white">{tech.name}</h4>
                      <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                        {tech.whyImportant}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-cyan-500/10 flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>Curve: {tech.learningCurve}</span>
                        <span className="text-cyan-300 font-semibold">{tech.popularity}% index</span>
                      </div>
                      <ResourceLinkButton
                        title={`${tech.name} documentation guide`}
                        platform="officialdocs"
                        itemType="technology"
                        customLabel="Read Documentation"
                        size="sm"
                        className="w-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* 4. BOOKS SECTION */}
      {(activeCategory === 'all' || activeCategory === 'book') && (
        <section className="space-y-4">
          <h2 className="font-heading text-xl font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <span>Foundational Industry Books ({filteredBooks.length})</span>
          </h2>

          {filteredBooks.length === 0 ? (
            <p className="text-xs text-slate-400 italic">No books match the selected filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredBooks.slice(0, activeCategory === 'all' ? 6 : 30).map((book, idx) => {
                const isSaved = isItemSaved(book.id);
                return (
                  <div
                    key={`${book.id}-${idx}`}
                    className="rounded-xl glass-card p-4 border border-cyan-500/15 flex flex-col justify-between hover:border-cyan-400/40 transition-all"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-1 mb-2">
                        <SourceTag
                          platform="Google Books"
                          price="Paid"
                          level="Recommended"
                          itemType="book"
                        />
                        <button
                          onClick={() => toggleSaveItem('book', book)}
                          className="text-slate-400 hover:text-rose-400 transition-colors shrink-0 p-1"
                          aria-label="Save book"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-400 text-rose-400' : ''}`} />
                        </button>
                      </div>

                      <span className="text-[10px] text-cyan-300 font-medium">
                        by {book.author}
                      </span>

                      <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5">{book.title}</h4>
                      <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                        {book.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-cyan-500/10 flex flex-col gap-2">
                      <p className="text-[10px] text-cyan-200/90 italic line-clamp-1">
                        Key Takeaway: "{book.keyTakeaway}"
                      </p>
                      <ResourceLinkButton
                        title={book.title}
                        platform="googlebooks"
                        itemType="book"
                        customLabel="Find on Google Books"
                        size="sm"
                        className="w-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* 5. MOVIES SECTION */}
      {(activeCategory === 'all' || activeCategory === 'movie') && (
        <section className="space-y-4">
          <h2 className="font-heading text-xl font-bold text-white flex items-center gap-2">
            <Film className="w-5 h-5 text-cyan-400" />
            <span>Inspiring Cinema & Documentaries ({filteredMovies.length})</span>
          </h2>

          {filteredMovies.length === 0 ? (
            <p className="text-xs text-slate-400 italic">No media matches the selected filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMovies.slice(0, activeCategory === 'all' ? 6 : 30).map((movie, idx) => {
                const isSaved = isItemSaved(movie.id);
                return (
                  <div
                    key={`${movie.id}-${idx}`}
                    className="rounded-xl glass-card p-4 border border-cyan-500/15 flex flex-col justify-between hover:border-cyan-400/40 transition-all"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-1 mb-2">
                        <SourceTag
                          platform="Netflix"
                          price="Paid"
                          level={movie.type}
                          itemType="movie"
                        />
                        <button
                          onClick={() => toggleSaveItem('movie', movie)}
                          className="text-slate-400 hover:text-rose-400 transition-colors shrink-0 p-1"
                          aria-label="Save media"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-400 text-rose-400' : ''}`} />
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5 text-[10px] text-indigo-300 font-medium mb-1">
                        <span>{movie.type}</span>
                        <span>·</span>
                        <span>{movie.year}</span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-white">{movie.title}</h4>
                      <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                        {movie.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-cyan-500/10 flex flex-col gap-2">
                      <p className="text-[10px] text-cyan-300 font-medium line-clamp-1">
                        Relevance: {movie.relevance}
                      </p>
                      <ResourceLinkButton
                        title={`${movie.title} ${movie.type}`}
                        platform="netflix"
                        itemType="movie"
                        customLabel="Stream / Watch Title"
                        size="sm"
                        className="w-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}
    </div>
  );
};
