import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';

export default function Lesson() {
  const moduleSlug = 'module-1';
  const lessonSlug = 'lesson-3';
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
              { label: 'Работа с файлами' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 1: ОСНОВЫ РАБОТЫ • Урок 3 из 5
          </div>
          <h1 className="text-4xl font-bold mb-8">Работа с файлами</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Как Claude создает, читает и редактирует файлы. Что такое проект и почему важна структура.
            </p>

            <SectionHeader>ПРОЕКТ = ПАПКА</SectionHeader>

            <InfoBlock>
              <p>
                Один проект = одна папка = одна идея. Всё, что Claude создает (код, стили, документы),
                хранится в этой папке.
              </p>
            </InfoBlock>

            <p className="mt-4">Почему это важно:</p>
            <ul className="space-y-2">
              <li><strong>Порядок:</strong> Все файлы проекта в одном месте</li>
              <li><strong>Контекст:</strong> Claude видит всю папку и понимает связи</li>
              <li><strong>История:</strong> Можно вернуться к старым версиям (через Git)</li>
            </ul>

            <SectionHeader>КАК CLAUDE РАБОТАЕТ</SectionHeader>

            <div className="space-y-4 my-6">
              <div className="bg-[var(--bg-card)] p-4 rounded">
                <p className="font-semibold mb-2">Создание файлов</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Claude создает файлы автоматически. Ты видишь их в панели слева.
                </p>
              </div>

              <div className="bg-[var(--bg-card)] p-4 rounded">
                <p className="font-semibold mb-2">Чтение</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Claude читает все файлы в проекте, чтобы понять контекст.
                </p>
              </div>

              <div className="bg-[var(--bg-card)] p-4 rounded">
                <p className="font-semibold mb-2">Редактирование</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Claude меняет код, исправляет ошибки, добавляет функции.
                </p>
              </div>
            </div>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              В следующем уроке — самое важное: правило 80/20. Узнаешь, почему исследование важнее разработки.
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
