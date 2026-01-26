import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';

export default function Lesson() {
  const moduleSlug = 'module-1';
  const lessonSlug = 'lesson-4';
  const nextLesson = getNextLesson(moduleSlug, lessonSlug);
  const previousLesson = getPreviousLesson(moduleSlug, lessonSlug);

  return (
    <div className="flex min-h-screen">
      <Sidebar currentModule={moduleSlug} currentLesson={lessonSlug} />

      <main className="flex-1 ml-64">
        <article className="max-w-4xl mx-auto px-8 py-12">
          <Breadcrumbs
            items={[
              { label: 'Главная', href: '/' },
              { label: 'Модуль 1: Основы', href: '/modules/module-1' },
              { label: 'Исследование перед разработкой' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 1: ОСНОВЫ РАБОТЫ • Урок 4 из 5
          </div>
          <h1 className="text-4xl font-bold mb-8">Исследование перед разработкой</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Главное правило вайб-кодинга: 80% времени — исследование, 20% — разработка.
            </p>

            <SectionHeader>ПРАВИЛО 80/20</SectionHeader>

            <div className="bg-[var(--accent-purple)]/20 border border-[var(--accent-purple)] p-8 rounded-lg my-8 text-center">
              <div className="text-6xl font-bold mb-4">80% / 20%</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-semibold text-2xl mb-2">80%</div>
                  <p className="text-sm">Исследование и планирование</p>
                </div>
                <div>
                  <div className="font-semibold text-2xl mb-2">20%</div>
                  <p className="text-sm">Разработка и код</p>
                </div>
              </div>
            </div>

            <InfoBlock>
              <p className="font-semibold mb-2">Почему так?</p>
              <p>
                Если Claude сразу начнет писать код без исследования — результат будет посредственным.
                Но если он сначала изучит ВСЁ (технологии, конкурентов, лучшие практики) — результат будет
                профессиональным.
              </p>
            </InfoBlock>

            <SectionHeader>КАК ИССЛЕДОВАТЬ</SectionHeader>

            <p>Скажи Claude:</p>

            <div className="space-y-3 my-6">
              <div className="bg-[var(--bg-card)] p-4 rounded">
                <p className="italic">"Найди лучшие практики для лендингов в 2026"</p>
              </div>
              <div className="bg-[var(--bg-card)] p-4 rounded">
                <p className="italic">"Изучи, какие технологии используют конкуренты"</p>
              </div>
              <div className="bg-[var(--bg-card)] p-4 rounded">
                <p className="italic">"Собери информацию о дизайн-трендах"</p>
              </div>
            </div>

            <p>
              Claude запустит поисковых агентов параллельно и соберет всю информацию.
            </p>

            <SectionHeader>ЦИКЛ: СОБРАЛ → УСОМНИЛСЯ → СОБРАЛ</SectionHeader>

            <InfoBlock variant="blue">
              <p className="font-semibold mb-2">Важно!</p>
              <p>
                После того, как Claude собрал информацию, скажи ему: <strong>"Усомнись в своих выводах.
                Что бы на это сказал опытный разработчик?"</strong>
              </p>
              <p className="mt-2 text-sm">
                Это заставит его критически переосмыслить решения и найти лучший путь.
              </p>
            </InfoBlock>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              В последнем уроке модуля узнаешь, как создавать документацию СНАЧАЛА — до написания кода.
            </p>
          </div>

          <LessonNavigation
            previousLesson={previousLesson}
            nextLesson={nextLesson}
          />
        </article>
      </main>
    </div>
  );
}
