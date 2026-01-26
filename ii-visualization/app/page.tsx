import Link from 'next/link';
import { courseData } from '@/lib/courseData';
import Sidebar from '@/components/Sidebar';
import { BookOpen, Lock } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 ml-64">
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Добро пожаловать в ИИ-визацию!
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-6">
              Курс по вайб-кодингу для предпринимателей
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Научись создавать приложения, сайты и автоматизации голосом с помощью
              Claude Code и AquaVoice. Без программирования, без боли — только результат.
            </p>
          </div>

          {/* Course Modules */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Модули курса</h2>

            {courseData.map((module, index) => (
              <div
                key={module.id}
                className={`bg-[var(--bg-secondary)] rounded-lg border border-[var(--border)] p-6 ${
                  !module.isActive ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--accent-purple)] text-white font-bold text-sm">
                        {index}
                      </div>
                      <h3 className="text-xl font-semibold">
                        {module.title}
                      </h3>
                    </div>

                    {module.isActive && module.lessons.length > 0 && (
                      <p className="text-[var(--text-secondary)] mb-4">
                        {module.lessons.length} {module.lessons.length === 1 ? 'урок' : 'уроков'}
                      </p>
                    )}
                  </div>

                  {!module.isActive && (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] text-sm text-[var(--text-secondary)]">
                      <Lock className="w-4 h-4" />
                      <span>Скоро</span>
                    </div>
                  )}
                </div>

                {module.isActive && module.lessons.length > 0 ? (
                  <div className="space-y-2">
                    {module.lessons.map((lesson) => (
                      <Link
                        key={lesson.id}
                        href={`/modules/${module.slug}/${lesson.slug}`}
                        className="flex items-center gap-3 px-4 py-3 rounded bg-[var(--bg-card)] hover:bg-[var(--bg-primary)] border border-transparent hover:border-[var(--accent-purple)] transition-all"
                      >
                        <BookOpen className="w-5 h-5 text-[var(--accent-purple)]" />
                        <span>{lesson.title}</span>
                      </Link>
                    ))}

                    <Link
                      href={`/modules/${module.slug}`}
                      className="inline-block mt-4 text-[var(--accent-purple)] hover:text-[var(--accent-indigo)] transition-colors"
                    >
                      Перейти к модулю →
                    </Link>
                  </div>
                ) : !module.isActive ? (
                  <p className="text-[var(--text-secondary)]">
                    Этот модуль находится в разработке и скоро будет доступен
                  </p>
                ) : null}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg border border-[var(--accent-purple)]/50">
            <h3 className="text-2xl font-bold mb-3">Готов начать?</h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Начни с первого модуля и узнай, как установить все необходимые инструменты
              для вайб-кодинга.
            </p>
            <Link
              href="/modules/module-0/lesson-1"
              className="inline-block px-6 py-3 bg-[var(--accent-purple)] hover:bg-[var(--accent-indigo)] rounded-lg font-medium transition-colors"
            >
              Начать обучение
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
