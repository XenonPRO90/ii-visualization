import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import CodeBlock from '@/components/CodeBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';
import Image from 'next/image';

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
              { label: 'Модуль 1: Установка', href: '/modules/module-1' },
              { label: 'Расширение Claude Code' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 1: УСТАНОВКА • Урок 4 из 5
          </div>
          <h1 className="text-4xl font-bold mb-8">Установка расширения Claude Code</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Сейчас мы установим самое главное — Claude Code. Это расширение превращает
              VS Code в мощный инструмент для вайб-кодинга.
            </p>

            <SectionHeader>ОТКРОЙ EXTENSIONS</SectionHeader>

            <p>В VS Code найди панель Extensions:</p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <p className="font-semibold mb-3">Два способа:</p>
              <ul className="space-y-2">
                <li>
                  <strong>1.</strong> Кликни на иконку квадратиков слева (4 квадрата)
                </li>
                <li>
                  <strong>2.</strong> Или нажми:
                  <div className="mt-2 bg-[var(--bg-card)] p-3 rounded">
                    <code>Cmd+Shift+X</code> (Mac) / <code>Ctrl+Shift+X</code> (Windows)
                  </div>
                </li>
              </ul>
            </div>

            <SectionHeader>НАЙДИ CLAUDE CODE</SectionHeader>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Введи в поиск</h3>
                <CodeBlock>Claude Code</CodeBlock>
                <p className="text-sm text-[var(--text-secondary)] mt-2">
                  Появится расширение от Anthropic (официальный разработчик)
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Нажми Install</h3>
                <p>
                  Кликни на синюю кнопку "Install". Установка займет несколько секунд.
                </p>

                <div className="my-6 rounded-lg overflow-hidden border border-[var(--border)]">
                  <Image
                    src="/screens/Снимок экрана 2569-01-29 в 21.02.48.png"
                    alt="Claude Code extension for VS Code"
                    width={1600}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <SectionHeader>АВТОРИЗАЦИЯ</SectionHeader>

            <p>После установки нужно войти в аккаунт Anthropic:</p>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Шаг 1: Открой панель Claude</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  После установки слева появится новая иконка Claude. Кликни на нее.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Шаг 2: Sign In</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Нажми кнопку "Sign In" и следуй инструкциям в браузере
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Шаг 3: Подписка</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Тебе понадобится подписка Claude Pro (~$20/месяц)
                </p>
              </div>
            </div>

            <InfoBlock>
              <p className="font-semibold mb-2">Нужна ли подписка?</p>
              <p>
                Да. Без подписки Claude Pro ты не сможешь использовать Claude Code.
                Но $20/месяц — это смешные деньги за такой мощный инструмент.
              </p>
              <p className="text-sm mt-2">
                Раньше тебе нужна была команда разработчиков за $10,000+. Теперь — $20.
              </p>
            </InfoBlock>

            <SectionHeader>ОТКРОЙ ЧАТ С CLAUDE</SectionHeader>

            <p>После авторизации можешь открыть чат:</p>

            <div className="bg-[var(--accent-purple)]/20 border border-[var(--accent-purple)] p-6 rounded-lg my-6">
              <p className="font-semibold mb-3">Горячая клавиша для чата:</p>
              <div className="bg-[var(--bg-card)] p-4 rounded text-center">
                <code className="text-lg">Cmd+Shift+P</code> (Mac)<br />
                <code className="text-lg">Ctrl+Shift+P</code> (Windows)
              </div>
              <p className="text-sm text-[var(--text-secondary)] mt-3">
                Затем введи: <code>Claude: Open Chat</code>
              </p>
              <p className="text-sm text-[var(--text-secondary)] mt-2">
                Или еще проще: <code>Shift+Cmd+Escape</code> (Mac) / <code>Shift+Ctrl+Escape</code> (Windows)
              </p>
            </div>

            <SectionHeader>ПРОВЕРКА</SectionHeader>

            <p>Давай проверим, что всё работает:</p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-4">Чек-лист:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="text-green-400 font-bold">✅</div>
                  <div>
                    <p className="font-semibold">Расширение установлено</p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Видишь иконку Claude слева
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 font-bold">✅</div>
                  <div>
                    <p className="font-semibold">Авторизация прошла</p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      В панели Claude написано твое имя
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 font-bold">✅</div>
                  <div>
                    <p className="font-semibold">Чат открывается</p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Горячая клавиша работает
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <SectionHeader>РЕЖИМЫ РАБОТЫ</SectionHeader>

            <p>В чате Claude есть три режима:</p>

            <div className="space-y-3 my-6">
              <div className="bg-[var(--bg-card)] p-4 rounded">
                <div className="font-semibold mb-1 text-blue-400">Plan Mode (Режим планирования)</div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Claude думает, но ничего не делает. Только предлагает план.
                </p>
              </div>

              <div className="bg-[var(--bg-card)] p-4 rounded">
                <div className="font-semibold mb-1 text-yellow-400">Ask Before Edits</div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Claude может делать, но спрашивает разрешение перед каждым действием.
                </p>
              </div>

              <div className="bg-[var(--bg-card)] p-4 rounded">
                <div className="font-semibold mb-1 text-green-400">Automatic</div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Claude делает всё сам, без вопросов. Максимальная автономность.
                </p>
              </div>
            </div>

            <InfoBlock variant="blue">
              <p>
                <strong>Совет:</strong> Начни с режима "Ask Before Edits", чтобы понять, что
                Claude делает. Потом можно переключиться на Automatic.
              </p>
            </InfoBlock>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Отлично! Теперь у тебя всё установлено:
            </p>

            <ul className="space-y-1">
              <li>✅ Visual Studio Code</li>
              <li>✅ AquaVoice</li>
              <li>✅ Claude Code</li>
            </ul>

            <p className="mt-4">
              В следующем уроке мы создадим твой первый проект и запустим Claude в работу!
            </p>

            <p className="text-lg font-semibold mt-6">
              Готов создать первый проект? 🚀
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
