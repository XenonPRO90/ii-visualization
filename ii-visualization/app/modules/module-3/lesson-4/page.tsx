import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import CodeBlock from '@/components/CodeBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';

export default function Lesson() {
  const moduleSlug = 'module-3';
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
              { label: 'Модуль 3: Методология вайб-кодинга', href: '/modules/module-3' },
              { label: 'Когда что-то не работает' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 3: МЕТОДОЛОГИЯ ВАЙБ-КОДИНГА • Урок 4 из 4
          </div>
          <h1 className="text-4xl font-bold mb-8">Когда что-то не работает</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Рано или поздно всё сломается. Проект не запустится, кнопка не нажмётся, Claude выдаст непонятную ошибку. Это абсолютно нормально. В этом уроке — как из паники переходить в спокойное «щас починим».
            </p>

            <SectionHeader>ПРАВИЛО №1: НЕ ПАНИКУЙ</SectionHeader>

            <p>
              Ошибка — это не катастрофа. Это информация. Программа говорит тебе: «вот здесь что-то не так». Твоя задача — передать эту информацию Claude, и он подскажет, как починить.
            </p>

            <InfoBlock>
              <p className="font-semibold mb-2">Главный принцип:</p>
              <p>
                <strong>Ошибки — часть работы, а не провал.</strong> У опытных разрабов
                их по 50 в день. Разница только в том, как быстро ты их чинишь.
              </p>
            </InfoBlock>

            <SectionHeader>КАК ПОКАЗАТЬ ОШИБКУ CLAUDE</SectionHeader>

            <p>
              Есть три способа — от самого быстрого к самому точному.
            </p>

            <div className="space-y-4 my-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Копипаста текста</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Если ошибка в виде текста (в терминале, в браузере) — скопируй весь текст и вставь в чат с коротким «что это значит, поправь».
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Скриншот</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Ошибка на экране, непонятно где она начинается и заканчивается —
                  просто сделай скриншот и вставь в чат (<code>Cmd+V</code>).
                  Claude прочитает.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">3. Описание поведения</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Ошибки нет, но что-то работает не так. Опиши: «когда я нажимаю
                  кнопку — ничего не происходит» или «форма не отправляется, но
                  в консоли чисто». Claude разберётся, куда смотреть.
                </p>
              </div>
            </div>

            <SectionHeader>КОНСОЛЬ БРАУЗЕРА — ТВОЙ ЛУЧШИЙ ДРУГ</SectionHeader>

            <p>
              Когда что-то не работает на сайте, а красной надписи нет — 90% ответов лежит в консоли браузера. Это скрытая панель, где браузер пишет всё, что идёт не так.
            </p>

            <div className="space-y-4 my-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Как открыть:</h3>
                <div className="bg-[var(--bg-card)] p-4 rounded">
                  <p><code className="text-lg">F12</code> — в большинстве браузеров</p>
                  <p><code className="text-lg">Cmd+Option+I</code> — Chrome/Safari на Mac</p>
                  <p><code className="text-lg">Ctrl+Shift+I</code> — Chrome на Windows</p>
                </div>
              </div>
            </div>

            <p>
              Откроется панель разработчика. Переходишь во вкладку <strong>Console</strong> — там красным подсвечено всё, что браузер считает ошибкой. Скрин этой панели + «вот ошибки в консоли, поправь» — Claude разберётся.
            </p>

            <SectionHeader>ТИПИЧНЫЕ СИТУАЦИИ</SectionHeader>

            <div className="space-y-4 my-6">
              <div className="bg-[var(--bg-card)] p-6 rounded-lg">
                <p className="font-semibold text-[var(--accent-purple)] mb-2">«Ничего не происходит»</p>
                <p className="text-sm mb-2">Нажимаешь кнопку — глухо. Ни ошибки, ни действия.</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>Что делать:</strong> открой консоль браузера. Обычно там красные
                  сообщения — их и покажи Claude.
                </p>
              </div>

              <div className="bg-[var(--bg-card)] p-6 rounded-lg">
                <p className="font-semibold text-[var(--accent-purple)] mb-2">«Выглядит не так»</p>
                <p className="text-sm mb-2">Вёрстка сломалась, кнопки наехали друг на друга, цвета не те.</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>Что делать:</strong> скриншот + «вот как выглядит, а должно быть
                  вот так». Желательно со вторым скрином «как хочется».
                </p>
              </div>

              <div className="bg-[var(--bg-card)] p-6 rounded-lg">
                <p className="font-semibold text-[var(--accent-purple)] mb-2">«Раньше работало, теперь нет»</p>
                <p className="text-sm mb-2">Ещё час назад всё ок, а сейчас — ошибка.</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>Что делать:</strong> спроси у Claude: «Покажи, что я менял за последний
                  час». Он посмотрит историю файлов и найдёт, что сломалось.
                </p>
              </div>

              <div className="bg-[var(--bg-card)] p-6 rounded-lg">
                <p className="font-semibold text-[var(--accent-purple)] mb-2">«Проект не запускается»</p>
                <p className="text-sm mb-2"><code>npm run dev</code> выдаёт ошибку и падает.</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>Что делать:</strong> скопируй текст ошибки из терминала в чат
                  Claude. Обычно это 2-3 минуты на починку.
                </p>
              </div>
            </div>

            <SectionHeader>КОГДА CLAUDE НЕ ПОМОГАЕТ</SectionHeader>

            <p>
              Иногда агент ходит по кругу: чинит одно, ломает другое. Если после 3-4 итераций ситуация не улучшается — пора менять подход.
            </p>

            <div className="space-y-3 my-6">
              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)] font-bold">1.</div>
                <div>
                  <p className="font-semibold">Опиши проблему подробнее</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Не «не работает», а «я нажимаю X, ожидаю Y, но получаю Z».
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)] font-bold">2.</div>
                <div>
                  <p className="font-semibold">Покажи, как должно быть</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Скриншот эталонного результата или пример из другого сайта.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)] font-bold">3.</div>
                <div>
                  <p className="font-semibold">Открой новый чат</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Свежая голова без загрязнённого контекста. Часто помогает мгновенно.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)] font-bold">4.</div>
                <div>
                  <p className="font-semibold">Разбей на мелкие задачи</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Вместо «почини всё» — «сначала проверь вот этот файл», «теперь вот этот».
                  </p>
                </div>
              </div>
            </div>

            <SectionHeader>УНИВЕРСАЛЬНАЯ КНОПКА: RELOAD WINDOW</SectionHeader>

            <p>
              Иногда ломается не код, а сам VS Code или Claude Code. Серый экран, бесконечная загрузка, агент «не отвечает». На 80% таких проблем работает одно действие:
            </p>

            <div className="bg-[var(--accent-purple)]/20 border border-[var(--accent-purple)] p-6 rounded-lg my-6">
              <p className="font-semibold mb-3">Как перезагрузить VS Code:</p>
              <ol className="space-y-2 text-sm">
                <li>1. <code>Cmd+Shift+P</code> (или <code>Ctrl+Shift+P</code>)</li>
                <li>2. Набери: <code>Developer: Reload Window</code></li>
                <li>3. Enter</li>
              </ol>
              <p className="text-sm text-[var(--text-secondary)] mt-3">
                VS Code перезагрузится за секунду. Проект не пропадёт, файлы сохранены. Только контекст чата сбросится.
              </p>
            </div>

            <InfoBlock variant="blue">
              <p>
                <strong>Запомни эту команду.</strong> Она решает больше всех проблем с
                интерфейсом. Серый экран, зависло, не отвечает, тормозит — первым делом Reload Window.
              </p>
            </InfoBlock>

            <SectionHeader>ЯДЕРНЫЙ ВАРИАНТ: ОТКАТ ЧЕРЕЗ GIT</SectionHeader>

            <p>
              Если всё совсем плохо и непонятно, где именно сломалось — просто откатись к последнему рабочему коммиту.
            </p>

            <CodeBlock>
              Верни проект к последнему коммиту, где всё точно работало
            </CodeBlock>

            <p className="mt-4">
              Claude покажет историю, ты выберешь точку — и всё плохое, что было после неё, пропадёт. Работает как ctrl+Z, только надёжнее.
            </p>

            <InfoBlock>
              <p className="font-semibold mb-2">Вот ради этого мы и коммитим часто:</p>
              <p>
                <strong>Откат — главная страховка вайб-кодинга.</strong> Не жалей времени
                на коммиты, они окупаются с первой же поломки.
              </p>
            </InfoBlock>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Теперь поломки тебя не пугают. Ты знаешь, что делать в каждой из типичных ситуаций и как вернуться в рабочее состояние за пару минут.
            </p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-4">Что ты узнал:</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ Как правильно показывать ошибки Claude</li>
                <li>✅ Как открывать консоль браузера (F12)</li>
                <li>✅ Что делать в типичных ситуациях поломок</li>
                <li>✅ Когда Claude не помогает — 4 шага</li>
                <li>✅ Developer: Reload Window как универсальное решение</li>
                <li>✅ Откат через Git как последнее средство</li>
              </ul>
            </div>

            <p>
              Модуль 3 завершён. У тебя теперь есть методология — ты планируешь, пишешь доки, задаёшь правила, быстро чинишь поломки. Это фундамент серьёзной работы.
            </p>

            <p>
              В финальном Модуле 4 — продвинутые техники. Режимы работы Claude, Git на уровне профи, тюнинг агента через Skills, MCP и Hooks, плюс параллельная работа нескольких агентов. Уровень, на котором ты перестаёшь думать о коде и думаешь только о продукте.
            </p>

            <p className="text-lg font-semibold mt-8">
              Погнали в финальный Модуль 4! 🚀
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
