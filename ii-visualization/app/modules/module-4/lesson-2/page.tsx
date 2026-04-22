import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import CodeBlock from '@/components/CodeBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';

export default function Lesson() {
  const moduleSlug = 'module-4';
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
              { label: 'Модуль 4: Продвинутые техники', href: '/modules/module-4' },
              { label: 'Git как профи' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 4: ПРОДВИНУТЫЕ ТЕХНИКИ • Урок 2 из 4
          </div>
          <h1 className="text-4xl font-bold mb-8">Git как профи: ветки, откаты, история</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              В Модуле 0 ты освоил базу — commit и push. Теперь пора пойти глубже. Ветки, откаты, слияния, история — всё это превращает Git из «страховки» в мощный инструмент разработки. Claude поможет со всем.
            </p>

            <SectionHeader>ЧТО ТАКОЕ ВЕТКИ</SectionHeader>

            <p>
              Представь, что твой проект — это дерево. Основная ветка (<code>main</code>) — ствол. Каждая новая фича — отдельная боковая ветка, которая растёт параллельно и не мешает стволу.
            </p>

            <p>Зачем это нужно:</p>

            <ul className="space-y-2 my-4">
              <li>→ Работать над новой фичей, не ломая основной проект</li>
              <li>→ Пробовать разные подходы параллельно</li>
              <li>→ Вернуть изменения без потерь, если идея не сработала</li>
              <li>→ Коллабить с другими (или с другим собой на втором компе)</li>
            </ul>

            <InfoBlock>
              <p className="font-semibold mb-2">Главный принцип:</p>
              <p>
                <strong>main — святое.</strong> Всё, что там лежит, должно работать. Всё
                экспериментальное — в отдельных ветках.
              </p>
            </InfoBlock>

            <SectionHeader>КАК СОЗДАТЬ ВЕТКУ</SectionHeader>

            <p>Попроси Claude в чате:</p>

            <CodeBlock>
              Создай ветку feature/auth и переключись на неё
            </CodeBlock>

            <p className="mt-4">
              Всё. Ты теперь на новой ветке. Все изменения пишутся сюда, main остаётся нетронутым.
            </p>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg my-6">
              <p className="font-semibold mb-3">Типичные имена веток:</p>
              <ul className="space-y-1 text-sm">
                <li>→ <code>feature/auth</code> — новая фича</li>
                <li>→ <code>fix/login-bug</code> — правка бага</li>
                <li>→ <code>experiment/new-design</code> — эксперимент</li>
                <li>→ <code>refactor/clean-api</code> — переписывание</li>
              </ul>
            </div>

            <SectionHeader>СЛИЯНИЕ ВЕТОК (MERGE)</SectionHeader>

            <p>
              Фича готова, протестирована — пора возвращать её в main. Это называется merge.
            </p>

            <CodeBlock>
              Влей ветку feature/auth в main и удали её
            </CodeBlock>

            <p className="mt-4">
              Claude переключится на main, заберёт изменения из feature/auth и удалит уже ненужную ветку. Чисто и аккуратно.
            </p>

            <InfoBlock variant="blue">
              <p>
                <strong>Правило:</strong> сливаем ветку только когда она точно работает.
                Прогнал localhost, проверил — и только потом merge.
              </p>
            </InfoBlock>

            <SectionHeader>КОНФЛИКТЫ СЛИЯНИЯ</SectionHeader>

            <p>
              Иногда при merge Git говорит: «обе ветки меняли один и тот же файл, не знаю, чей вариант выбрать». Это конфликт.
            </p>

            <p>
              Не паникуй. Просто попроси Claude:
            </p>

            <CodeBlock>
              У меня конфликт при слиянии. Разбери его и выбери правильный вариант
            </CodeBlock>

            <p className="mt-4">
              Claude посмотрит оба варианта, поймёт смысл изменений и предложит объединение. В 95% случаев справляется сам.
            </p>

            <SectionHeader>ОТКАТ НА ЛЮБУЮ ТОЧКУ ИСТОРИИ</SectionHeader>

            <p>
              Помнишь, как в Модуле 0 мы говорили про откат? Теперь расширим: откатываться можно не только к последнему коммиту, а к любому из истории.
            </p>

            <div className="space-y-4 my-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Посмотри историю</h3>
                <CodeBlock>
                  Покажи последние 20 коммитов с описаниями
                </CodeBlock>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Выбери точку</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Claude покажет список. Читаешь описания коммитов, вспоминаешь, когда всё точно работало.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">3. Вернись</h3>
                <CodeBlock>
                  Верни проект к коммиту с сообщением «добавил форму регистрации»
                </CodeBlock>
              </div>
            </div>

            <InfoBlock variant="blue">
              <p>
                <strong>Осторожно:</strong> откат в истории влияет на все файлы сразу. Если хочешь
                вернуть один файл, а остальное оставить — скажи Claude явно: «верни только этот файл к версии из коммита X».
              </p>
            </InfoBlock>

            <SectionHeader>STASH — ВРЕМЕННАЯ ПАРКОВКА</SectionHeader>

            <p>
              Ситуация: ты начал писать фичу, но не успел — срочно надо поправить баг на main. А изменения уже есть, и коммитить их «наполовину» не хочется.
            </p>

            <p>
              Git stash — это «заморозка» текущих правок. Как положил в ящик стола и потом достал.
            </p>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg my-6 space-y-3">
              <div>
                <p className="font-semibold">Заморозить:</p>
                <CodeBlock>Спрячь мои текущие изменения в stash</CodeBlock>
              </div>

              <div>
                <p className="font-semibold">Разморозить:</p>
                <CodeBlock>Верни мои изменения из stash обратно</CodeBlock>
              </div>
            </div>

            <p>
              Полезная штука, когда работа прерывается на полушаге.
            </p>

            <SectionHeader>СРАВНЕНИЕ ВЕРСИЙ (DIFF)</SectionHeader>

            <p>
              Хочешь понять, что именно изменилось между двумя версиями файла или коммитами — Claude покажет.
            </p>

            <CodeBlock>
              Покажи, что изменилось в файле app.tsx между последними двумя коммитами
            </CodeBlock>

            <p className="mt-4">
              Получишь чистый diff: красным — что было, зелёным — что стало. Полезно при разборе, когда именно сломалось что-то.
            </p>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Теперь Git — не страшная штука для программистов, а твой партнёр. Ветки для безопасных экспериментов, откаты для починки ошибок, история как машина времени.
            </p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-4">Что ты узнал:</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ Что такое ветки и зачем они нужны</li>
                <li>✅ Создание, переключение, слияние веток</li>
                <li>✅ Что делать при конфликте слияния</li>
                <li>✅ Откат на любую точку истории</li>
                <li>✅ Stash как временная парковка изменений</li>
                <li>✅ Сравнение версий через diff</li>
              </ul>
            </div>

            <p>
              В следующем уроке — тюнинг Claude Code. Skills, MCP, Hooks. Это способ сделать агента ещё умнее и подключить его к внешним сервисам.
            </p>

            <p className="text-lg font-semibold mt-8">
              Погнали тюнинговать! 🚀
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
