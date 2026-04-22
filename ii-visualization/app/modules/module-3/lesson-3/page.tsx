import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import CodeBlock from '@/components/CodeBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';

export default function Lesson() {
  const moduleSlug = 'module-3';
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
              { label: 'Модуль 3: Методология вайб-кодинга', href: '/modules/module-3' },
              { label: 'CLAUDE.md — твои постоянные правила' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 3: МЕТОДОЛОГИЯ ВАЙБ-КОДИНГА • Урок 3 из 4
          </div>
          <h1 className="text-4xl font-bold mb-8">CLAUDE.md — твои постоянные правила</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Устал в каждом новом чате повторять: «используй TypeScript», «не трогай этот файл», «комментируй на русском»? Есть способ сказать это один раз — и Claude будет помнить навсегда. Это файл CLAUDE.md.
            </p>

            <SectionHeader>ЧТО ТАКОЕ CLAUDE.md</SectionHeader>

            <p>
              CLAUDE.md — это обычный текстовый файл в корне проекта. Но для агента он как конституция. Каждый раз, когда ты открываешь Claude Code в этом проекте, агент первым делом читает этот файл и запоминает правила.
            </p>

            <p>
              Правила действуют всегда. В любом чате. В любой задаче. Ты не повторяешься — Claude не забывает.
            </p>

            <InfoBlock>
              <p className="font-semibold mb-2">Главная идея:</p>
              <p>
                <strong>CLAUDE.md = твои инструкции, которые работают сами.</strong> Написал
                раз — действует всегда.
              </p>
            </InfoBlock>

            <SectionHeader>ЗАЧЕМ ОН НУЖЕН</SectionHeader>

            <p>Три главные пользы:</p>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">1. Защита от ошибок</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  «Никогда не удаляй файл .env», «никогда не коммить пароли».
                  Claude будет это помнить и отказываться от опасных действий.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">2. Специфика проекта</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  «База данных в папке /db», «API лежит в /api», «все тексты на русском».
                  Claude сразу понимает твою архитектуру.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">3. Твои привычки</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  «Всегда спрашивай перед удалением файлов», «коммиты делай на русском»,
                  «не используй table в CSS». Claude работает так, как тебе удобно.
                </p>
              </div>
            </div>

            <SectionHeader>КАК СОЗДАТЬ CLAUDE.md</SectionHeader>

            <p>Три варианта — выбирай любой:</p>

            <div className="space-y-4 my-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Способ 1: Команда /init</h3>
                <p>В чате Claude введи:</p>
                <CodeBlock>/init</CodeBlock>
                <p className="text-sm text-[var(--text-secondary)] mt-2">
                  Claude проанализирует проект и создаст базовый CLAUDE.md под твой стек.
                  Потом просто добавишь свои правила сверху.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Способ 2: Попросить словами</h3>
                <CodeBlock>
                  Создай CLAUDE.md с правилами безопасности для этого проекта
                </CodeBlock>
                <p className="text-sm text-[var(--text-secondary)] mt-2">
                  Claude сам придумает и добавит стандартные правила (не коммить секреты,
                  не удалять без подтверждения и т.д.).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Способ 3: Вручную</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Создай файл <code>CLAUDE.md</code> в корне проекта (рядом с package.json).
                  Напиши правила своими словами.
                </p>
              </div>
            </div>

            <SectionHeader>ГДЕ МОЖЕТ ЛЕЖАТЬ CLAUDE.md</SectionHeader>

            <p>
              Не только в корне проекта. Claude ищет этот файл в нескольких местах:
            </p>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg my-6">
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">CLAUDE.md в корне проекта</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Основной. Правила для всего проекта. Попадает в git, шарится с командой.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">CLAUDE.md в подпапках</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Правила только для этой папки. Удобно, когда проект большой и разные части требуют разного подхода.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">CLAUDE.local.md</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Личные правила, которые не попадают в git. Для твоих персональных
                    удобств и экспериментов.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">~/.claude/CLAUDE.md</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Глобальные правила для всех твоих проектов сразу. Положил один раз —
                    Claude применяет везде.
                  </p>
                </div>
              </div>
            </div>

            <SectionHeader>ЧТО ПИСАТЬ ВНУТРИ</SectionHeader>

            <p>Типичные разделы, которые имеет смысл завести:</p>

            <ul className="space-y-2 my-4">
              <li>→ <strong>Безопасность:</strong> какие файлы нельзя трогать/коммитить</li>
              <li>→ <strong>Стек:</strong> какой язык, фреймворк, библиотеки используются</li>
              <li>→ <strong>Структура проекта:</strong> что где лежит</li>
              <li>→ <strong>Git-воркфлоу:</strong> основная ветка, стиль коммитов</li>
              <li>→ <strong>Подтверждения:</strong> в каких случаях обязательно спрашивать разрешения</li>
              <li>→ <strong>Стиль кода:</strong> табы или пробелы, именование, комментарии</li>
            </ul>

            <SectionHeader>ПРИМЕР CLAUDE.md</SectionHeader>

            <p>Вот как может выглядеть CLAUDE.md небольшого проекта:</p>

            <CodeBlock language="markdown">
{`# Правила проекта

## Безопасность
- NEVER коммитить файл .env
- NEVER удалять файлы без явного подтверждения
- NEVER хранить секреты в коде — только в переменных окружения

## Стек
- Frontend: Next.js 14 + Tailwind CSS
- База: Supabase (Postgres)
- Деплой: Vercel

## Структура
- app/ — страницы Next.js
- components/ — переиспользуемые компоненты
- lib/ — утилиты и клиенты API

## Git
- Основная ветка: main
- Коммиты на русском, в настоящем времени: "добавляю форму регистрации"
- Не делаем push без коммита

## Стиль кода
- TypeScript везде где возможно
- Комментарии на русском
- Все цвета через Tailwind-токены, не hex`}
            </CodeBlock>

            <SectionHeader>ПРАВИЛА ПО-АНГЛИЙСКИ: NEVER, ALWAYS, MUST</SectionHeader>

            <p>
              Маленький хак: критичные правила пиши по-английски капсом — Claude их заметит сразу. Это сигнальные слова, которые модель выделяет в памяти.
            </p>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg my-6">
              <div className="space-y-2 text-sm">
                <p><code className="text-red-400">NEVER</code> — никогда не делай этого</p>
                <p><code className="text-green-400">ALWAYS</code> — всегда делай так</p>
                <p><code className="text-yellow-400">MUST</code> — обязательно</p>
              </div>
            </div>

            <p>Примеры:</p>

            <ul className="space-y-2 my-4">
              <li>→ <code>NEVER</code> commit files from /secrets folder</li>
              <li>→ <code>ALWAYS</code> ask before deleting database tables</li>
              <li>→ <code>MUST</code> use TypeScript for all new files</li>
            </ul>

            <SectionHeader>ЧТО НЕ ПИСАТЬ В CLAUDE.md</SectionHeader>

            <p>Файл — не помойка. Не превращай его в дневник проекта.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-red-900/20 border border-red-700 p-4 rounded">
                <p className="font-semibold text-red-400 mb-2">Плохо:</p>
                <ul className="space-y-1 text-sm">
                  <li>❌ Секреты, пароли, ключи</li>
                  <li>❌ Длинные истории «как мы пришли к этому решению»</li>
                  <li>❌ Копии документации из интернета</li>
                  <li>❌ Списки дел и заметки</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-700 p-4 rounded">
                <p className="font-semibold text-green-400 mb-2">Хорошо:</p>
                <ul className="space-y-1 text-sm">
                  <li>✅ Краткие правила</li>
                  <li>✅ Запреты и разрешения</li>
                  <li>✅ Описание стека</li>
                  <li>✅ Структура папок</li>
                </ul>
              </div>
            </div>

            <InfoBlock variant="blue">
              <p>
                <strong>Разумный лимит — 200-300 строк.</strong> Всё, что больше, Claude
                начинает просматривать по диагонали. Чем лаконичнее, тем чётче работает.
              </p>
            </InfoBlock>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              CLAUDE.md готов — Claude работает по твоим правилам постоянно. В следующем уроке разберём последний столп методологии: что делать, когда что-то перестало работать. Спойлер: ошибки — это нормальная часть работы, паниковать не нужно.
            </p>

            <p className="text-lg font-semibold mt-8">
              Погнали разбираться с поломками! 🚀
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
