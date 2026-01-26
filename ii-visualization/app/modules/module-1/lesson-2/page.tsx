import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import CodeBlock from '@/components/CodeBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';

export default function Lesson() {
  const moduleSlug = 'module-1';
  const lessonSlug = 'lesson-2';
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
              { label: 'Как разговаривать с Claude' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 1: ОСНОВЫ РАБОТЫ • Урок 2 из 5
          </div>
          <h1 className="text-4xl font-bold mb-8">Как разговаривать с Claude</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Научимся формулировать запросы так, чтобы Claude понимал тебя с первого раза.
            </p>

            <SectionHeader>ЭТАП 0: ВЫПЛЕСНИ ВСЁ</SectionHeader>

            <p>
              Первый этап — просто рассказать Claude свою идею. Без структуры, как есть.
            </p>

            <InfoBlock>
              <p className="font-semibold mb-2">Пример хорошего первого запроса:</p>
              <CodeBlock>
{`Слушай, я хочу сделать сайт для моего бизнеса. У меня студия маникюра.
Нужно показать услуги, цены, фотографии работ. Чтобы клиенты могли записаться
онлайн. Ещё хочу блог, где буду писать про уход за ногтями. В общем, красиво,
просто, чтобы на телефоне хорошо смотрелось.`}
              </CodeBlock>
            </InfoBlock>

            <p>
              Видишь? Никакой структуры. Просто мысли. Claude поймет и начнет задавать уточняющие вопросы.
            </p>

            <SectionHeader>ДАВАЙ КОНТЕКСТ</SectionHeader>

            <p>Чем больше контекста, тем лучше результат:</p>

            <ul className="space-y-2">
              <li>🎯 Кто твоя аудитория (предприниматели, студенты, бабушки)</li>
              <li>🎯 Какая проблема решается</li>
              <li>🎯 Есть ли примеры (ссылки на сайты, которые нравятся)</li>
              <li>🎯 Твой опыт (если есть)</li>
            </ul>

            <SectionHeader>НЕ ТОРОПИСЬ</SectionHeader>

            <InfoBlock variant="blue">
              <p className="font-semibold mb-2">Главное правило вайб-кодинга:</p>
              <p>
                Работай НАЛЕГКЕ. Не пытайся сразу всё понять. Просто говори, что хочешь.
                Claude сам разберется.
              </p>
            </InfoBlock>

            <SectionHeader>ПРИМЕРЫ ПЛОХИХ И ХОРОШИХ ЗАПРОСОВ</SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-red-900/20 border border-red-500/30 p-4 rounded">
                <div className="font-semibold mb-2 text-red-400">❌ Плохо</div>
                <p className="text-sm">"Сделай сайт"</p>
                <p className="text-xs text-[var(--text-secondary)] mt-2">
                  Слишком мало информации
                </p>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 p-4 rounded">
                <div className="font-semibold mb-2 text-green-400">✅ Хорошо</div>
                <p className="text-sm">"Сделай лендинг для моего курса по фотографии.
                Нужны секции: герой, программа, отзывы, форма записи"</p>
                <p className="text-xs text-[var(--text-secondary)] mt-2">
                  Понятно, что делать
                </p>
              </div>
            </div>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              В следующем уроке узнаем, как Claude работает с файлами и почему важна структура проекта.
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
