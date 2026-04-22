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
              { label: 'Модуль 1: Установка', href: '/modules/module-1' },
              { label: 'Установка VS Code' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 1: УСТАНОВКА • Урок 2 из 5
          </div>
          <h1 className="text-4xl font-bold mb-8">Установка Visual Studio Code</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Visual Studio Code (VS Code) — это твоя рабочая среда. Именно здесь ты будешь
              общаться с Claude Code и создавать свои проекты.
            </p>

            <SectionHeader>ЧТО ТАКОЕ VS CODE</SectionHeader>

            <p>
              VS Code — это текстовый редактор для работы с кодом. Но не пугайся! Тебе не
              нужно знать, как писать код. Ты будешь просто:
            </p>

            <ul className="space-y-2">
              <li>Открывать папки с проектами</li>
              <li>Общаться с Claude в чате</li>
              <li>Смотреть, как создаются файлы</li>
            </ul>

            <p>Это просто удобная программа, внутри которой работает AI-агент.</p>

            <InfoBlock>
              <p>
                <strong>Важно:</strong> VS Code — это НЕ сложная программа для программистов.
                Это просто место, где Claude Code удобно работает с файлами.
              </p>
            </InfoBlock>

            <SectionHeader>УСТАНОВКА НА MAC</SectionHeader>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Скачай VS Code</h3>
                <p>Перейди на сайт:</p>
                <CodeBlock>https://code.visualstudio.com</CodeBlock>
                <p className="text-sm text-[var(--text-secondary)] mt-2">
                  Нажми на большую синюю кнопку "Download for Mac"
                </p>

                <div className="my-6 rounded-lg overflow-hidden border border-[var(--border)]">
                  <Image
                    src="/screens/Снимок экрана 2569-01-29 в 21.00.11.png"
                    alt="Visual Studio Code download page"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Открой скачанный файл</h3>
                <p>
                  Найди в папке "Загрузки" файл <code>VSCode-darwin-universal.zip</code>
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Дважды кликни на него — он распакуется
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">3. Перенеси в "Программы"</h3>
                <p>
                  Перетащи приложение "Visual Studio Code" в папку "Программы"
                </p>
                <InfoBlock variant="blue">
                  <p className="text-sm">
                    Это важно! Если не перенести в "Программы", могут быть проблемы с доступом.
                  </p>
                </InfoBlock>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">4. Запусти VS Code</h3>
                <p>
                  Открой папку "Программы" и запусти Visual Studio Code
                </p>
                <p className="text-sm text-[var(--text-secondary)] mt-2">
                  При первом запуске macOS может спросить разрешение — нажми "Открыть"
                </p>
              </div>
            </div>

            <SectionHeader>УСТАНОВКА НА WINDOWS</SectionHeader>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Скачай VS Code</h3>
                <p>Перейди на сайт:</p>
                <CodeBlock>https://code.visualstudio.com</CodeBlock>
                <p className="text-sm text-[var(--text-secondary)] mt-2">
                  Нажми на кнопку "Download for Windows"
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Запусти установщик</h3>
                <p>
                  Найди в папке "Загрузки" файл <code>VSCodeUserSetup-x64.exe</code>
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Дважды кликни, чтобы начать установку
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">3. Следуй инструкциям</h3>
                <ul className="space-y-2 text-sm">
                  <li>✅ Прими лицензионное соглашение</li>
                  <li>✅ Выбери папку установки (оставь по умолчанию)</li>
                  <li>✅ <strong>Отметь галочки:</strong></li>
                </ul>
                <div className="bg-[var(--bg-secondary)] p-4 rounded mt-2 space-y-1 text-sm">
                  <div>☑ Добавить действие "Открыть с помощью Code"</div>
                  <div>☑ Добавить в PATH (важно!)</div>
                  <div>☑ Создать значок на рабочем столе</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">4. Завершение</h3>
                <p>
                  Нажми "Установить" и дождись окончания
                </p>
                <p className="text-sm text-[var(--text-secondary)] mt-2">
                  После установки можно сразу запустить VS Code
                </p>
              </div>
            </div>

            <SectionHeader>ПЕРВЫЙ ЗАПУСК</SectionHeader>

            <p>После того, как ты запустил VS Code, ты увидишь окно приветствия.</p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-4">Что ты увидишь:</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Слева</strong> — панель с иконками (Explorer, Search, Extensions)
                </li>
                <li>
                  <strong>В центре</strong> — Welcome экран с подсказками
                </li>
                <li>
                  <strong>Сверху</strong> — меню (File, Edit, View и т.д.)
                </li>
              </ul>
            </div>

            <InfoBlock>
              <p className="font-semibold mb-2">Не пугайся интерфейса!</p>
              <p>
                Пока все эти кнопки и панели могут казаться сложными. Но на самом деле
                тебе нужно знать только 2 вещи:
              </p>
              <ul className="mt-2 space-y-1">
                <li>1. Как открыть папку (<strong>File → Open Folder</strong>)</li>
                <li>2. Как открыть чат с Claude (об этом в следующих уроках)</li>
              </ul>
              <p className="mt-2 text-sm">Всё остальное агент сделает сам.</p>
            </InfoBlock>

            <SectionHeader>НАСТРОЙКА ЯЗЫКА (ОПЦИОНАЛЬНО)</SectionHeader>

            <p>
              Если хочешь, можешь поставить русский язык интерфейса:
            </p>

            <ol className="space-y-2">
              <li>Нажми <code>Ctrl+Shift+P</code> (Windows) или <code>Cmd+Shift+P</code> (Mac)</li>
              <li>Введи: <code>Configure Display Language</code></li>
              <li>Выбери "Install additional languages"</li>
              <li>Найди "Russian" и установи</li>
              <li>Перезапусти VS Code</li>
            </ol>

            <InfoBlock variant="blue">
              <p>
                <strong>Совет:</strong> Можно оставить английский интерфейс. В программировании
                все термины на английском, и Claude тоже лучше понимает английские команды.
              </p>
            </InfoBlock>

            <SectionHeader>ПРОВЕРКА УСТАНОВКИ</SectionHeader>

            <p>Чтобы убедиться, что всё работает:</p>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg my-6 space-y-3">
              <div>
                <div className="font-semibold text-green-400 mb-1">✅ VS Code запускается</div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Программа открывается без ошибок
                </p>
              </div>
              <div>
                <div className="font-semibold text-green-400 mb-1">✅ Видишь меню сверху</div>
                <p className="text-sm text-[var(--text-secondary)]">
                  File, Edit, View, Terminal и другие
                </p>
              </div>
              <div>
                <div className="font-semibold text-green-400 mb-1">✅ Можешь открыть папку</div>
                <p className="text-sm text-[var(--text-secondary)]">
                  File → Open Folder работает
                </p>
              </div>
            </div>

            <p>Если всё работает — отлично! Переходим к следующему шагу.</p>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Теперь, когда VS Code установлен, в следующем уроке мы установим AquaVoice —
              программу для голосового ввода. Именно она позволит тебе диктовать голосом
              вместо печати.
            </p>

            <p className="text-lg font-semibold mt-6">
              Готов к следующему шагу? Погнали! 🚀
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
