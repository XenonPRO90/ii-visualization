import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';

export default function Lesson() {
  const moduleSlug = 'module-1';
  const lessonSlug = 'lesson-5';
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
              { label: 'Документация и чек-листы' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 1: ОСНОВЫ РАБОТЫ • Урок 5 из 5
          </div>
          <h1 className="text-4xl font-bold mb-8">Документация и чек-листы</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Документация СНАЧАЛА — золотое правило вайб-кодинга. Всё прописываем ДО разработки.
            </p>

            <SectionHeader>ЗАЧЕМ ДОКУМЕНТАЦИЯ</SectionHeader>

            <InfoBlock>
              <p className="font-semibold mb-2">Главный принцип:</p>
              <p>
                Claude работает качественно только когда у него есть ПЛАН. Документация — это и есть план.
              </p>
            </InfoBlock>

            <p className="mt-4">Что прописывать:</p>

            <ul className="space-y-2">
              <li>🎯 Какие технологии использовать</li>
              <li>🎯 Как должен выглядеть дизайн</li>
              <li>🎯 Какие функции нужны</li>
              <li>🎯 Как решать возможные проблемы</li>
            </ul>

            <SectionHeader>ЧЕК-ЛИСТЫ</SectionHeader>

            <p>
              Чек-лист — это список задач для Claude. Он идет по нему пункт за пунктом.
            </p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <p className="font-semibold mb-3">Пример чек-листа:</p>
              <div className="space-y-2 text-sm">
                <div>☐ Изучить лучшие практики</div>
                <div>☐ Создать структуру проекта</div>
                <div>☐ Написать документацию</div>
                <div>☐ Создать базовую верстку</div>
                <div>☐ Добавить функционал</div>
                <div>☐ Протестировать</div>
                <div>☐ Исправить ошибки</div>
              </div>
            </div>

            <SectionHeader>ДНЕВНИК ОШИБОК</SectionHeader>

            <p>
              Claude должен записывать все ошибки и их решения. Это помогает не повторять их.
            </p>

            <InfoBlock variant="blue">
              <p>
                Скажи Claude: "Веди дневник ошибок. Когда что-то сломается — запиши проблему и решение".
              </p>
            </InfoBlock>

            <SectionHeader>ИТОГИ МОДУЛЯ 1</SectionHeader>

            <p>
              Поздравляю! Теперь ты знаешь основы вайб-кодинга:
            </p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <ul className="space-y-2">
                <li>✅ Интерфейс Claude Code</li>
                <li>✅ Как формулировать запросы</li>
                <li>✅ Работа с файлами</li>
                <li>✅ Правило 80/20</li>
                <li>✅ Документация СНАЧАЛА</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg border border-[var(--accent-purple)]/50 p-8 my-8">
              <h3 className="text-2xl font-bold mb-3">Следующие модули</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Модули 2-4 находятся в разработке и скоро будут доступны:
              </p>
              <ul className="space-y-2">
                <li><strong>Модуль 2:</strong> Голосовое кодирование с AquaVoice</li>
                <li><strong>Модуль 3:</strong> Проекты для предпринимателей</li>
                <li><strong>Модуль 4:</strong> Продвинутые техники</li>
              </ul>
            </div>

            <p className="text-lg font-semibold mt-8">
              Ты прошел основы! Теперь — практика! 🚀
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
