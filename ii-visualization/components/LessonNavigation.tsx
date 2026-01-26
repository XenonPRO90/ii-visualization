import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface LessonNavigationProps {
  previousLesson?: {
    moduleSlug: string;
    lesson: {
      slug: string;
      title: string;
    };
  } | null;
  nextLesson?: {
    moduleSlug: string;
    lesson: {
      slug: string;
      title: string;
    };
  } | null;
}

export default function LessonNavigation({
  previousLesson,
  nextLesson,
}: LessonNavigationProps) {
  return (
    <div className="flex items-center justify-between mt-12 pt-8 border-t border-[var(--border)]">
      <div className="flex-1">
        {previousLesson && (
          <Link
            href={`/modules/${previousLesson.moduleSlug}/${previousLesson.lesson.slug}`}
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-purple)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <div>
              <div className="text-xs">Назад</div>
              <div className="text-sm font-medium">{previousLesson.lesson.title}</div>
            </div>
          </Link>
        )}
      </div>

      <div className="flex-1 flex justify-end">
        {nextLesson && (
          <Link
            href={`/modules/${nextLesson.moduleSlug}/${nextLesson.lesson.slug}`}
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-purple)] transition-colors text-right"
          >
            <div>
              <div className="text-xs">Дальше</div>
              <div className="text-sm font-medium">{nextLesson.lesson.title}</div>
            </div>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
