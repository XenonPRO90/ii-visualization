import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import CodeBlock from '@/components/CodeBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';

export default function Lesson() {
  const moduleSlug = 'module-4';
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
              { label: 'Модуль 4: Продвинутые техники', href: '/modules/module-4' },
              { label: 'Тюнинг Claude: Skills, MCP, Hooks' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 4: ПРОДВИНУТЫЕ ТЕХНИКИ • Урок 3 из 4
          </div>
          <h1 className="text-4xl font-bold mb-8">Тюнинг Claude: Skills, MCP, Hooks</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Сам по себе Claude Code и так мощный. Но можно накинуть на него прокачку — дать ему новые навыки, подключить к сервисам и автоматизировать события. Это Skills, MCP и Hooks. Три кита твоего персонального агента.
            </p>

            <SectionHeader>SKILLS — КАСТОМНЫЕ НАВЫКИ</SectionHeader>

            <p>
              Skills — это твои собственные команды для Claude. Как слэш-команды <code>/clear</code> или <code>/init</code>, только сделанные тобой под конкретные задачи.
            </p>

            <p>Типичные примеры Skills:</p>

            <ul className="space-y-2 my-4">
              <li>→ <code>/review</code> — «прогони код-ревью по моим правилам»</li>
              <li>→ <code>/deploy</code> — «собери билд и задеплой на Vercel»</li>
              <li>→ <code>/checklist</code> — «проверь, что не забыл перед пушем»</li>
              <li>→ <code>/changelog</code> — «сгенерируй changelog из последних коммитов»</li>
            </ul>

            <InfoBlock>
              <p className="font-semibold mb-2">Главная идея:</p>
              <p>
                <strong>Повторяешь одно и то же — сделай Skill.</strong> Один раз
                опишешь процесс, и потом вызываешь одной командой.
              </p>
            </InfoBlock>

            <p>Создать Skill можно прямо у Claude:</p>

            <CodeBlock>
              Создай для меня skill /review, который проверяет код по правилам из CLAUDE.md и выдаёт список улучшений
            </CodeBlock>

            <p className="mt-4">
              Дальше просто вызываешь <code>/review</code> в любом чате — и получаешь нужный результат.
            </p>

            <SectionHeader>MCP — ПОДКЛЮЧАЕМ ВНЕШНИЕ СЕРВИСЫ</SectionHeader>

            <p>
              MCP расшифровывается как Model Context Protocol. Звучит страшно — на деле просто способ соединить Claude с другими сервисами: базами данных, API, мессенджерами, таск-трекерами.
            </p>

            <p>
              Через MCP Claude может напрямую ходить в Supabase, GitHub, Notion, Slack, Figma, твой бот Telegram — и читать оттуда данные или изменять их.
            </p>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg my-6">
              <p className="font-semibold mb-3">Популярные MCP-сервера:</p>
              <ul className="space-y-2 text-sm">
                <li>→ <strong>Supabase MCP</strong> — Claude видит структуру твоей БД и пишет SQL</li>
                <li>→ <strong>GitHub MCP</strong> — читает issues, делает PR, смотрит код других репо</li>
                <li>→ <strong>Notion MCP</strong> — достаёт заметки и ТЗ из Notion</li>
                <li>→ <strong>Figma MCP</strong> — смотрит макеты и вытаскивает стили</li>
                <li>→ <strong>Playwright MCP</strong> — управляет браузером, парсит сайты, делает скриншоты</li>
              </ul>
            </div>

            <p>Подключить MCP — минутное дело. В чате:</p>

            <CodeBlock>
              Подключи Supabase MCP. URL проекта и ключ лежат в .env
            </CodeBlock>

            <p className="mt-4">
              Claude всё настроит сам. После этого можно писать: «возьми всех пользователей из таблицы users, у кого ещё не подтверждён email» — и Claude сам ходит в базу.
            </p>

            <InfoBlock variant="blue">
              <p>
                <strong>Где искать MCP-серверы:</strong> на GitHub по запросу «mcp server».
                Их уже сотни, под каждый популярный сервис. Бесплатные, ставятся за минуту.
              </p>
            </InfoBlock>

            <SectionHeader>HOOKS — АВТОМАТИЧЕСКИЕ ДЕЙСТВИЯ</SectionHeader>

            <p>
              Hooks — это команды, которые Claude запускает сам, без твоей просьбы, при определённых событиях.
            </p>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">PreToolUse</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Срабатывает перед тем, как Claude что-то изменит. Например: «перед удалением файла спроси меня ещё раз».
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">PostToolUse</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  После каждой правки. Например: «после изменения кода — автоматически прогони prettier».
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">SessionStart</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Когда ты только открыл чат. Например: «напомни о недокоммиченных изменениях».
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Stop</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Когда Claude заканчивает задачу. Например: «отправь мне уведомление в Telegram».
                </p>
              </div>
            </div>

            <p>Примеры полезных Hooks:</p>

            <ul className="space-y-2 my-4">
              <li>→ После правки — автоформатировать код</li>
              <li>→ Перед удалением базы — отправить уведомление и подождать подтверждения</li>
              <li>→ Перед commit — прогнать тесты</li>
              <li>→ После push — задеплоить на Vercel</li>
              <li>→ При запуске сессии — показать список открытых задач</li>
            </ul>

            <InfoBlock variant="blue">
              <p>
                <strong>Hooks настраиваются через settings.json.</strong> Просто скажи Claude,
                что хочешь — он сам отредактирует файл настроек и пропишет нужный hook.
              </p>
            </InfoBlock>

            <SectionHeader>КАК ЭТО СОЧЕТАЕТСЯ</SectionHeader>

            <p>
              Все три инструмента работают вместе. Связка, которая меняет игру:
            </p>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg my-6">
              <p className="font-semibold mb-3">Пример: продвинутый workflow для блога</p>
              <ul className="space-y-2 text-sm">
                <li><strong>Skill:</strong> <code>/new-post</code> — создаёт новый пост по шаблону</li>
                <li><strong>MCP:</strong> Notion — вытаскивает черновик из заметок</li>
                <li><strong>Hook:</strong> PostToolUse — после сохранения поста автоматически деплоит сайт</li>
              </ul>
              <p className="text-sm text-[var(--text-secondary)] mt-3">
                Одна команда <code>/new-post «как выбрать ноутбук»</code> — Claude идёт в
                Notion, достаёт черновик, форматирует, сохраняет в проект, деплоит на Vercel. Ты просто проверяешь результат в браузере.
              </p>
            </div>

            <SectionHeader>С ЧЕГО НАЧАТЬ</SectionHeader>

            <p>Не надо сразу ставить всё. Подход по нарастающей:</p>

            <div className="space-y-3 my-4">
              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)] font-bold">1.</div>
                <p>Начни со Skills — автоматизируй то, что делаешь 5+ раз в неделю</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)] font-bold">2.</div>
                <p>Подключи 1-2 MCP, которые реально нужны (Supabase, GitHub)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)] font-bold">3.</div>
                <p>Добавляй Hooks точечно, когда поймёшь, что тебя бесит вручную делать</p>
              </div>
            </div>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Теперь у тебя есть вся информация, как превратить Claude Code из обычного помощника в персонального AI-ассистента под твои задачи.
            </p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-4">Что ты узнал:</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ Skills — кастомные slash-команды под твои задачи</li>
                <li>✅ MCP — подключение внешних сервисов (БД, Notion, Figma и т.д.)</li>
                <li>✅ Hooks — автоматические действия при событиях</li>
                <li>✅ Как это сочетается в реальных workflow</li>
                <li>✅ С чего начать: Skills → MCP → Hooks</li>
              </ul>
            </div>

            <p>
              В последнем уроке — Worktrees и Agent Teams. Параллельные версии проекта и армия агентов, работающих одновременно над разными задачами. Это уже уровень «Claude Code как тимлид».
            </p>

            <p className="text-lg font-semibold mt-8">
              Погнали в финал! 🚀
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
