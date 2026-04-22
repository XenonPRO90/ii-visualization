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
            МОДУЛЬ 1: ОСНОВЫ РАБОТЫ • Урок 5 из 9
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

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Документация и чек-листы — это фундамент. Теперь, когда ты умеешь планировать до кода, агент работает совсем по-другому. Без хаоса, с чётким маршрутом.
            </p>

            <p>
              В следующем уроке — про то, как быстро передавать Claude визуальный контекст через скриншоты и прикреплённые файлы. Это сильно ускоряет любой разговор.
            </p>

            <p className="text-lg font-semibold mt-8">
              Погнали учиться показывать! 🚀
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
