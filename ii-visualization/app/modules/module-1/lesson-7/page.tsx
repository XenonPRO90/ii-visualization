import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import CodeBlock from '@/components/CodeBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';

export default function Lesson() {
  const moduleSlug = 'module-1';
  const lessonSlug = 'lesson-7';
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
              { label: 'Модуль 1: Основы работы', href: '/modules/module-1' },
              { label: 'Несколько чатов параллельно' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 1: ОСНОВЫ РАБОТЫ • Урок 7 из 9
          </div>
          <h1 className="text-4xl font-bold mb-8">Несколько чатов параллельно</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              До сих пор ты работал с одним чатом — как с одним человеком. Но Claude Code умеет клонировать себя. И пока один агент пишет код, второй может искать, а третий — проверять. Это суперсила вайб-кодинга.
            </p>

            <SectionHeader>ЗАЧЕМ НЕСКОЛЬКО ЧАТОВ</SectionHeader>

            <p>
              Один чат = один поток мысли. Когда ты смешиваешь всё в одном — «расскажи про архитектуру», «создай файл», «поправь баг» — Claude начинает путаться. Контекст забивается мусором.
            </p>

            <p>
              Несколько чатов = разные роли у разных агентов. Каждый занимается своим делом, и у каждого — чистая голова.
            </p>

            <InfoBlock>
              <p className="font-semibold mb-2">Главная идея:</p>
              <p>
                <strong>Один агент — одна задача.</strong> Разделяй потоки — получишь
                вдвое больше за то же время.
              </p>
            </InfoBlock>

            <SectionHeader>МЕТОД «ТРИ ВКЛАДКИ»</SectionHeader>

            <p>
              Классический сетап для работы над проектом. Три параллельных чата с разными ролями:
            </p>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Чат 1 — Обсуждение</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Идеи, планирование, «как лучше сделать», «какие варианты есть».
                  Никакого кода здесь не трогаем.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Чат 2 — Работа</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Основной рабочий чат. Создание файлов, правки, реализация фич.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Чат 3 — Проверка</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Критический взгляд со стороны. «Посмотри как сеньор, что плохо
                  в этом коде?». Свежая голова видит то, что рабочий уже замылил.
                </p>
              </div>
            </div>

            <p>
              Пока первый обсуждает с тобой подход, второй уже делает часть задачи, а третий проверяет то, что второй уже сделал. Все работают — ты рулишь.
            </p>

            <SectionHeader>КАК ОТКРЫТЬ НОВЫЙ ЧАТ</SectionHeader>

            <p>
              Два простых способа:
            </p>

            <div className="space-y-4 my-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Способ 1: Горячая клавиша</h3>
                <div className="bg-[var(--bg-card)] p-4 rounded text-center">
                  <code className="text-lg">Shift+Cmd+Escape</code> (Mac)<br />
                  <code className="text-lg">Shift+Ctrl+Escape</code> (Windows)
                </div>
                <p className="text-sm text-[var(--text-secondary)] mt-2">
                  Та же комбинация, которой ты открыл первый чат. Жми ещё раз — появится вторая панель.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Способ 2: Через иконку</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Кликай на иконку Claude Code сбоку столько раз, сколько нужно чатов.
                </p>
              </div>
            </div>

            <p>
              В каждом чате — свой контекст, своя история, свои задачи. Они не мешают друг другу.
            </p>

            <SectionHeader>ИСТОРИЯ ЧАТОВ</SectionHeader>

            <p>
              Все твои прошлые разговоры с Claude сохраняются. В любой момент можно вернуться к нужному и продолжить.
            </p>

            <div className="space-y-4 my-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Открыть список прошлых чатов:</h3>
                <ol className="space-y-2 text-sm">
                  <li>1. Нажми <code>Cmd+Shift+P</code> (или <code>Ctrl+Shift+P</code>)</li>
                  <li>2. Начни вводить: <code>Claude Code: Resume conversation</code></li>
                  <li>3. Выбери из списка нужный</li>
                </ol>
              </div>
            </div>

            <InfoBlock variant="blue">
              <p>
                <strong>Названия чатов</strong> Claude придумывает сам по первым сообщениям.
                Если видишь «Добавление формы регистрации» — понимаешь, что в этом
                чате именно этим занимались.
              </p>
            </InfoBlock>

            <SectionHeader>КОГДА НОВЫЙ, КОГДА ПРОДОЛЖИТЬ</SectionHeader>

            <p>
              Частая ошибка — открывать новый чат по любому поводу. Теряется контекст, агент не помнит о чём шла речь. Другая крайность — всё делать в одном чате часами. Память забивается, Claude тупит.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-green-900/20 border border-green-700 p-4 rounded">
                <p className="font-semibold text-green-400 mb-2">Новый чат когда:</p>
                <ul className="space-y-1 text-sm">
                  <li>→ Принципиально новая задача</li>
                  <li>→ Чат стал слишком длинным (100+ сообщений)</li>
                  <li>→ Нужен независимый взгляд на результат</li>
                  <li>→ Хочешь попробовать другой подход, не засоряя текущий</li>
                </ul>
              </div>

              <div className="bg-blue-900/20 border border-blue-700 p-4 rounded">
                <p className="font-semibold text-blue-400 mb-2">Продолжить старый когда:</p>
                <ul className="space-y-1 text-sm">
                  <li>→ Уточняешь то, что уже делали</li>
                  <li>→ Задача связана с предыдущими</li>
                  <li>→ Нужен весь контекст чата</li>
                  <li>→ Исправляешь только что сделанное</li>
                </ul>
              </div>
            </div>

            <SectionHeader>КОМАНДА /clear</SectionHeader>

            <p>
              Иногда чат становится длинным, но ты не хочешь открывать новый — хочешь оставаться в том же. Для этого есть слеш-команда:
            </p>

            <CodeBlock>/clear</CodeBlock>

            <p className="mt-4">
              Она стирает контекст чата — Claude «забывает» всё, что было выше. Чат остаётся, история сообщений на экране тоже, но для агента начинается с чистого листа.
            </p>

            <InfoBlock variant="blue">
              <p>
                <strong>Когда использовать /clear:</strong> когда задача закрыта и
                переходишь к новой внутри того же чата, но контекст старой задачи
                уже только мешает.
              </p>
            </InfoBlock>

            <SectionHeader>ПРАКТИКА: ТРИ ЧАТА ДЛЯ РЕАЛЬНОЙ ЗАДАЧИ</SectionHeader>

            <p>
              Допустим, делаешь лендинг для своего продукта. Вот как это выглядит в трёх чатах:
            </p>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg my-6 space-y-4">
              <div>
                <p className="font-semibold text-[var(--accent-purple)]">Чат 1 — Обсуждение</p>
                <p className="text-sm italic">
                  «Какие секции обычно есть на продуктовых лендингах? Что писать в первом экране?»
                </p>
              </div>

              <div>
                <p className="font-semibold text-[var(--accent-purple)]">Чат 2 — Работа</p>
                <p className="text-sm italic">
                  «Создай главную страницу с hero-блоком, фичами, отзывами и CTA. Использовать Next.js и Tailwind».
                </p>
              </div>

              <div>
                <p className="font-semibold text-[var(--accent-purple)]">Чат 3 — Проверка</p>
                <p className="text-sm italic">
                  «Посмотри как опытный фронтенд-разработчик. Найди все проблемы с доступностью и адаптивностью».
                </p>
              </div>
            </div>

            <p>
              Три агента — три угла зрения. Ты видишь процесс полностью и не упираешься в одну голову.
            </p>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Теперь у тебя есть инструмент, которого нет ни у одного разработчика-человека: командa из нескольких «тебя». Главное — не забывать распараллеливать.
            </p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-4">Что ты узнал:</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ Зачем работать в нескольких чатах</li>
                <li>✅ Метод «три вкладки»: обсуждение, работа, проверка</li>
                <li>✅ Как открыть новый чат и где смотреть историю</li>
                <li>✅ Когда открывать новый, а когда продолжить старый</li>
                <li>✅ Команду /clear для чистки контекста без нового чата</li>
              </ul>
            </div>

            <p>
              В следующем уроке — про то, что делать, когда всё пошло не так. Ошибки, зависания, непонятные сообщения. Спойлер: это нормальная часть работы, и паниковать не нужно.
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
