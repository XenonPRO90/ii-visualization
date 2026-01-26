import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getModuleBySlug } from '@/lib/courseData';
import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import LessonCard from '@/components/LessonCard';
import { BookOpen, Lock } from 'lucide-react';

export default function ModulePage({
  params,
}: {
  params: { moduleSlug: string };
}) {
  const module = getModuleBySlug(params.moduleSlug);

  if (!module) {
    notFound();
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar currentModule={params.moduleSlug} />

      <main className="flex-1 ml-64">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <Breadcrumbs
            items={[
              { label: 'Главная', href: '/' },
              { label: module.title },
            ]}
          />

          <h1 className="text-4xl font-bold mb-6">{module.title}</h1>

          {!module.isActive ? (
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-8 text-center">
              <Lock className="w-12 h-12 mx-auto mb-4 text-[var(--text-secondary)]" />
              <h2 className="text-2xl font-semibold mb-3">Скоро будет доступно</h2>
              <p className="text-[var(--text-secondary)]">
                Этот модуль находится в разработке. Следите за обновлениями!
              </p>
              <Link
                href="/"
                className="inline-block mt-6 px-6 py-3 bg-[var(--accent-purple)] hover:bg-[var(--accent-indigo)] rounded-lg transition-colors"
              >
                Вернуться на главную
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {module.lessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  title={lesson.title}
                  href={`/modules/${params.moduleSlug}/${lesson.slug}`}
                  icon={BookOpen}
                  isActive={lesson.isActive}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
