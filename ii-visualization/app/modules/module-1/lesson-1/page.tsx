import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';

export default function Lesson() {
  const moduleSlug = 'module-1';
  const lessonSlug = 'lesson-1';
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
              { label: 'Интерфейс Claude Code' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 1: ОСНОВЫ РАБОТЫ • Урок 1 из 5
          </div>
          <h1 className="text-4xl font-bold mb-8">Интерфейс Claude Code</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Разберем интерфейс Claude Code. Ты поймешь, где что находится и как работать эффективно.
            </p>

            <SectionHeader>ОСНОВНЫЕ ЭЛЕМЕНТЫ</SectionHeader>

            <div className="space-y-4 my-6">
              <div className="bg-[var(--bg-card)] p-4 rounded">
                <p className="font-semibold mb-2">Слева — Панель файлов (Explorer)</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Здесь ты видишь все файлы проекта. Claude создает их автоматически,
                  ты просто наблюдаешь.
                </p>
              </div>

              <div className="bg-[var(--bg-card)] p-4 rounded">
                <p className="font-semibold mb-2">В центре — Редактор</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Открытые файлы. Можешь читать код, но редактировать лучше через Claude.
                </p>
              </div>

              <div className="bg-[var(--bg-card)] p-4 rounded">
                <p className="font-semibold mb-2">Справа — Чат с Claude</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Самое важное место. Здесь ты общаешься с агентом голосом или текстом.
                </p>
              </div>
            </div>

            <SectionHeader>РЕЖИМЫ РАБОТЫ</SectionHeader>

            <p>В чате есть переключатель режимов:</p>

            <div className="space-y-3 my-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">Plan Mode (Режим планирования)</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Claude ТОЛЬКО думает. Не создает файлы, не меняет код. Просто предлагает план.
                  Используй, когда хочешь обдумать идею.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="font-semibold">Ask Before Edits</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Claude может работать, но спрашивает подтверждение перед каждым действием.
                  Хорош для обучения.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold">Automatic</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Максимальная автономность. Claude делает всё сам. Используй, когда уверен в задаче.
                </p>
              </div>
            </div>

            <InfoBlock>
              <p>
                <strong>Совет:</strong> Начинай с Ask Before Edits. Когда привыкнешь — переходи на Automatic.
              </p>
            </InfoBlock>

            <SectionHeader>ГОРЯЧИЕ КЛАВИШИ</SectionHeader>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Открыть чат:</span>
                  <code>Shift+Cmd+Escape</code>
                </div>
                <div className="flex justify-between">
                  <span>Открыть папку:</span>
                  <code>Cmd+O</code>
                </div>
                <div className="flex justify-between">
                  <span>Поиск в проекте:</span>
                  <code>Cmd+Shift+F</code>
                </div>
              </div>
            </div>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Теперь ты знаешь интерфейс. В следующем уроке научимся правильно разговаривать с Claude.
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
