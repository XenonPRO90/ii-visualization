import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import CodeBlock from '@/components/CodeBlock';
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
              { label: 'Модуль 1: Установка', href: '/modules/module-1' },
              { label: 'Твой первый проект' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 1: УСТАНОВКА • Урок 5 из 7
          </div>
          <h1 className="text-4xl font-bold mb-8">Твой первый проект с Claude Code</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Всё установлено! Теперь создадим первый проект и запустим Claude в работу.
            </p>

            <SectionHeader>СОЗДАЙ ПАПКУ ДЛЯ ПРОЕКТОВ</SectionHeader>

            <p>
              Сначала создай место, где будут храниться все твои проекты.
            </p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <p className="font-semibold mb-3">Рекомендуемая структура:</p>
              <CodeBlock>
{`Документы/
  └── Projects/
      ├── my-first-project/
      ├── telegram-bot/
      └── landing-page/`}
              </CodeBlock>
              <p className="text-sm text-[var(--text-secondary)] mt-3">
                Каждый проект = отдельная папка
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">На Mac:</h3>
                <ol className="space-y-2 text-sm">
                  <li>1. Открой Finder</li>
                  <li>2. Перейди в "Документы"</li>
                  <li>3. Нажми Cmd+Shift+N (новая папка)</li>
                  <li>4. Назови папку: <code>Projects</code></li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">На Windows:</h3>
                <ol className="space-y-2 text-sm">
                  <li>1. Открой "Проводник"</li>
                  <li>2. Перейди в "Документы"</li>
                  <li>3. Правой кнопкой → "Создать" → "Папка"</li>
                  <li>4. Назови папку: <code>Projects</code></li>
                </ol>
              </div>
            </div>

            <InfoBlock variant="blue">
              <p>
                <strong>Важно:</strong> Название без русских букв и пробелов. Используй дефисы
                или подчеркивания: <code>my-project</code> или <code>my_project</code>
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div className="text-green-400">✅ my-first-project</div>
                <div className="text-red-400">❌ мой проект</div>
                <div className="text-green-400">✅ task_manager</div>
                <div className="text-red-400">❌ My Project!!!</div>
              </div>
            </InfoBlock>

            <SectionHeader>ОТКРОЙ ПАПКУ В VS CODE</SectionHeader>

            <p>Теперь откроем эту папку в VS Code:</p>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Способ 1: Через меню</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  File → Open Folder → выбери папку Projects
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Способ 2: Перетаскиванием</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Перетащи папку Projects прямо на иконку VS Code
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Способ 3: Из Finder/Проводника</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Правой кнопкой на папку → "Открыть с помощью" → VS Code
                </p>
              </div>
            </div>

            <SectionHeader>ЧТО ТЫ ВИДИШЬ</SectionHeader>

            <p>
              После открытия папки слева появится панель EXPLORER:
            </p>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg my-6">
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Слева — панель файлов:</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Название твоей папки сверху. Пока она пустая — это нормально.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Справа — пустая область:</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Здесь будут открываться файлы
                  </p>
                </div>
              </div>
            </div>

            <SectionHeader>ОТКРОЙ ЧАТ С CLAUDE</SectionHeader>

            <p>Теперь самое интересное — запускаем агента!</p>

            <div className="bg-[var(--accent-purple)]/20 border border-[var(--accent-purple)] p-6 rounded-lg my-6">
              <p className="font-semibold mb-3">Нажми горячую клавишу:</p>
              <div className="bg-[var(--bg-card)] p-4 rounded text-center">
                <code className="text-xl">Shift+Cmd+Escape</code> (Mac)<br />
                <code className="text-xl">Shift+Ctrl+Escape</code> (Windows)
              </div>
            </div>

            <p>
              Справа откроется чат с Claude. Поздравляю! Теперь ты готов к вайб-кодингу! 🎉
            </p>

            <SectionHeader>ПЕРВЫЙ ЗАПРОС</SectionHeader>

            <p>Давай протестируем. Напиши в чат:</p>

            <CodeBlock>
{`Привет! Создай файл README.md с описанием моего проекта.
Напиши там, что это учебный проект для изучения Claude Code.`}
            </CodeBlock>

            <p className="mt-4">Нажми Enter и смотри, что происходит:</p>

            <div className="space-y-3 my-6">
              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)]">→</div>
                <div>
                  <p className="font-semibold">Claude отвечает</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Он понимает твой запрос и предлагает план
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)]">→</div>
                <div>
                  <p className="font-semibold">Создает файл</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Слева в панели появится новый файл README.md
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)]">→</div>
                <div>
                  <p className="font-semibold">Готово!</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Кликни на README.md — увидишь содержимое
                  </p>
                </div>
              </div>
            </div>

            <InfoBlock>
              <p className="font-semibold mb-2">Поздравляю!</p>
              <p>
                Ты только что создал свой первый файл голосом (или текстом).
                Никакого кода, никаких сложностей — просто попросил агента, и он сделал.
              </p>
              <p className="text-sm mt-2">
                Это и есть вайб-кодинг. Работать налегке. Получать результат. Кайфовать.
              </p>
            </InfoBlock>

            <SectionHeader>ПОПРОБУЙ С ГОЛОСОМ</SectionHeader>

            <p>Теперь давай используем AquaVoice:</p>

            <ol className="space-y-3">
              <li>
                <strong>1.</strong> Кликни в поле ввода чата
              </li>
              <li>
                <strong>2.</strong> Нажми свою горячую клавишу AquaVoice (Cmd+Shift+Space)
              </li>
              <li>
                <strong>3.</strong> Скажи: <em>"Создай файл app.js с функцией, которая выводит
                приветствие в консоль"</em>
              </li>
              <li>
                <strong>4.</strong> Отпусти клавишу
              </li>
              <li>
                <strong>5.</strong> Нажми Enter
              </li>
            </ol>

            <p className="mt-4">
              Claude создаст файл app.js с кодом. И ты только что написал свою первую программу
              ГОЛОСОМ! 🎙️
            </p>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Отлично! Ты создал свой первый файл голосом, пообщался с агентом, посмотрел магию вайб-кодинга изнутри.
            </p>

            <p>
              В следующем уроке — запустим дев-сервер и увидим твой проект живым в браузере. Это один из самых приятных моментов в работе: ты меняешь код, а браузер обновляется сам. Затягивает моментально.
            </p>

            <p className="text-lg font-semibold mt-8">
              Погнали смотреть в браузере! 🚀
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
