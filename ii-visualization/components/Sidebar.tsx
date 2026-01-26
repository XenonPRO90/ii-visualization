'use client';

import Link from 'next/link';
import { useState } from 'react';
import { courseData } from '@/lib/courseData';
import { ChevronDown, ChevronRight, Lock, Circle } from 'lucide-react';

interface SidebarProps {
  currentModule?: string;
  currentLesson?: string;
}

export default function Sidebar({ currentModule, currentLesson }: SidebarProps) {
  const [expandedModules, setExpandedModules] = useState<string[]>([
    currentModule || 'module-0',
  ]);

  const toggleModule = (moduleSlug: string) => {
    setExpandedModules((prev) =>
      prev.includes(moduleSlug)
        ? prev.filter((slug) => slug !== moduleSlug)
        : [...prev, moduleSlug]
    );
  };

  return (
    <div className="w-64 h-screen bg-[var(--bg-secondary)] border-r border-[var(--border)] overflow-y-auto fixed left-0 top-0">
      <div className="p-6">
        <Link href="/">
          <h2 className="text-xl font-bold mb-1">ИИ-визация</h2>
          <p className="text-sm text-[var(--text-secondary)]">Курс по вайб-кодингу</p>
        </Link>
      </div>

      <nav className="px-3 pb-6">
        {courseData.map((module) => {
          const isExpanded = expandedModules.includes(module.slug);
          const isCurrentModule = currentModule === module.slug;

          return (
            <div key={module.id} className="mb-2">
              <button
                onClick={() => module.isActive && toggleModule(module.slug)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded text-left transition-colors ${
                  isCurrentModule
                    ? 'bg-[var(--bg-card)] text-[var(--text-primary)]'
                    : 'hover:bg-[var(--bg-card)] text-[var(--text-secondary)]'
                } ${!module.isActive ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center gap-2 flex-1">
                  {module.isActive ? (
                    isExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )
                  ) : (
                    <Lock className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium truncate">
                    {module.title.split(': ')[1]}
                  </span>
                </div>
              </button>

              {isExpanded && module.lessons.length > 0 && (
                <div className="ml-6 mt-1 space-y-1">
                  {module.lessons.map((lesson) => {
                    const isCurrentLesson =
                      isCurrentModule && currentLesson === lesson.slug;

                    return (
                      <Link
                        key={lesson.id}
                        href={`/modules/${module.slug}/${lesson.slug}`}
                        className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${
                          isCurrentLesson
                            ? 'bg-[var(--accent-purple)] text-white'
                            : 'hover:bg-[var(--bg-card)] text-[var(--text-secondary)]'
                        }`}
                      >
                        <Circle
                          className={`w-2 h-2 ${
                            isCurrentLesson ? 'fill-white' : ''
                          }`}
                        />
                        <span className="truncate">{lesson.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
