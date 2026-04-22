import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import CodeBlock from '@/components/CodeBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';

export default function Lesson() {
  const moduleSlug = 'module-4';
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
              { label: 'Модуль 4: Продвинутые техники', href: '/modules/module-4' },
              { label: 'Worktrees и Agent Teams' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 4: ПРОДВИНУТЫЕ ТЕХНИКИ • Урок 4 из 4
          </div>
          <h1 className="text-4xl font-bold mb-8">Worktrees и Agent Teams</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Финальный уровень вайб-кодинга. Не один Claude, а команда из нескольких. Не одна копия проекта, а несколько параллельных. Ты перестаёшь быть разработчиком — становишься тимлидом целого AI-отдела.
            </p>

            <SectionHeader>WORKTREES — ПАРАЛЛЕЛЬНЫЕ КОПИИ ПРОЕКТА</SectionHeader>

            <p>
              Обычно у тебя одна папка проекта. Переключился на ветку — файлы изменились. Вернулся на main — снова изменились. Неудобно, если хочешь одновременно видеть две версии.
            </p>

            <p>
              Worktree — это способ иметь несколько параллельных папок одного проекта, каждая на своей ветке. Все они живут одновременно. Все можно открывать в разных VS Code одновременно.
            </p>

            <InfoBlock>
              <p className="font-semibold mb-2">Главная идея:</p>
              <p>
                <strong>Worktree = твой проект в нескольких параллельных вселенных.</strong> Ветка
                A работает, ветка B экспериментирует — и обе доступны в один момент.
              </p>
            </InfoBlock>

            <SectionHeader>КОГДА НУЖНЫ WORKTREES</SectionHeader>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Срочный баг во время разработки</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Ты пилишь фичу на feature/auth, и вдруг — баг в проде. Вместо stash
                  и переключения просто открываешь второй worktree на main и чинишь там.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Сравнение двух подходов</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Делаешь фичу двумя способами параллельно. Открыл два worktree,
                  запустил два дев-сервера, смотришь живьём, что лучше.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Параллельная работа агентов</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Один Claude чинит баг в main, второй одновременно добавляет фичу в
                  feature/payments — никто никому не мешает.
                </p>
              </div>
            </div>

            <SectionHeader>КАК СОЗДАТЬ WORKTREE</SectionHeader>

            <p>В Claude Code есть встроенная поддержка worktrees. Создать просто:</p>

            <CodeBlock>
              Создай worktree для ветки feature/payments в отдельной папке
            </CodeBlock>

            <p className="mt-4">
              Claude сделает рядом с твоим проектом вторую папку, переключит её на нужную ветку. Открываешь эту папку в новом окне VS Code — и работаешь параллельно.
            </p>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg my-6">
              <p className="font-semibold mb-3">Типичная структура после worktree:</p>
              <CodeBlock>
{`Документы/
  └── Projects/
      ├── my-project/              ← основная ветка main
      └── my-project-payments/     ← worktree для feature/payments`}
              </CodeBlock>
            </div>

            <SectionHeader>AGENT TEAMS — КОМАНДА ИЗ НЕСКОЛЬКИХ CLAUDE</SectionHeader>

            <p>
              Мы уже говорили про три параллельных чата в первом модуле. Agent Teams — это то же самое, но на стероидах. Главный Claude руководит «младшими», и они вместе решают задачу.
            </p>

            <p>Как это выглядит на практике:</p>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg my-6">
              <p className="font-semibold mb-3">Задача: переписать API с REST на GraphQL</p>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="text-[var(--accent-purple)] font-semibold">Лид-Claude:</span>
                  <span>Разбивает задачу на куски. Координирует остальных.</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[var(--accent-purple)] font-semibold">Агент-1:</span>
                  <span>Проектирует схему GraphQL и резолверы.</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[var(--accent-purple)] font-semibold">Агент-2:</span>
                  <span>Переписывает эндпоинты серверной части.</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[var(--accent-purple)] font-semibold">Агент-3:</span>
                  <span>Обновляет фронтенд на новые запросы.</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[var(--accent-purple)] font-semibold">Агент-4:</span>
                  <span>Пишет тесты и проверяет, что всё работает.</span>
                </div>
              </div>
            </div>

            <p>
              Все работают параллельно. Ты смотришь за главным Claude. Он отчитывается, что где делается и показывает результат.
            </p>

            <SectionHeader>КАК ЗАПУСТИТЬ AGENT TEAM</SectionHeader>

            <p>
              Просто попроси Claude действовать как тимлид:
            </p>

            <CodeBlock>
              Переписать API с REST на GraphQL. Делегируй задачу нескольким агентам
              параллельно и координируй их работу. В конце собери отчёт.
            </CodeBlock>

            <p className="mt-4">
              Claude сам раскидает подзадачи между subagent'ами, запустит их одновременно и вернёт тебе итог. Ты не видишь внутреннюю кухню — только результат.
            </p>

            <InfoBlock variant="blue">
              <p>
                <strong>Ключевое слово для агентов:</strong> «делегируй» или «создай
                subagent'ов для параллельной работы». Claude поймёт, что речь про
                team-mode.
              </p>
            </InfoBlock>

            <SectionHeader>КОМБО: WORKTREES + AGENT TEAMS</SectionHeader>

            <p>
              Самое мощное сочетание: каждый агент работает в своём worktree, на своей ветке. Ничто не пересекается, никто никому не мешает.
            </p>

            <CodeBlock>
              Сделай команду из 3 агентов. Каждому — свой worktree и своя ветка.
              Агент 1 — новый дизайн главной. Агент 2 — фикс бага с авторизацией.
              Агент 3 — добавить страницу контактов.
            </CodeBlock>

            <p className="mt-4">
              Claude создаст три параллельных копии проекта, запустит трёх агентов. Через 20 минут у тебя три готовых ветки, которые можно проверить и влить в main.
            </p>

            <InfoBlock>
              <p className="font-semibold mb-2">Это и есть новый уровень вайб-кодинга:</p>
              <p>
                <strong>Не ты работаешь над проектом — у тебя есть отдел, который
                работает на тебя.</strong> Ты ставишь задачи, они делают. Ты проверяешь, они деплоят.
              </p>
            </InfoBlock>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Ты прошёл весь путь. От первой установки VS Code до управления командой AI-агентов. Это реально новая профессия — её ещё не назвали, но ты уже в ней.
            </p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-4">Что ты узнал в Модуле 4:</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ Режимы работы Claude Code и когда какой включать</li>
                <li>✅ Git на уровне профи — ветки, откаты, stash, diff</li>
                <li>✅ Skills, MCP, Hooks для тюнинга агента под себя</li>
                <li>✅ Worktrees для параллельных версий проекта</li>
                <li>✅ Agent Teams для делегирования задач нескольким Claude одновременно</li>
              </ul>
            </div>

            <p>
              Что делать дальше? Самое главное — <strong>строить</strong>. Бери идею, которая давно сидит в голове, и делай её. Знаний для старта уже хватает, всё остальное доберёшь по ходу.
            </p>

            <div className="bg-[var(--accent-purple)]/20 border border-[var(--accent-purple)] p-6 rounded-lg my-6">
              <p className="font-semibold mb-3">Пара советов напоследок:</p>
              <ul className="space-y-2 text-sm">
                <li>→ Первый проект сделай маленьким — не замахивайся на стартап-единорог</li>
                <li>→ Коммить часто. Реально часто.</li>
                <li>→ Не бойся сломать — откат всегда рядом</li>
                <li>→ Скучно делать одно и то же — автоматизируй через Skills</li>
                <li>→ Застрял — открой новый чат, свежая голова видит лучше</li>
              </ul>
            </div>

            <p>
              Добро пожаловать в клуб людей, которые строят продукты голосом и словами. Тут уже не скучно.
            </p>

            <p className="text-lg font-semibold mt-8">
              Погнали строить! 🚀🎉
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
