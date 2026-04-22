import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import CodeBlock from '@/components/CodeBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';

export default function Lesson() {
  const moduleSlug = 'module-4';
  const lessonSlug = 'lesson-1';
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
              { label: 'Режимы работы Claude Code' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 4: ПРОДВИНУТЫЕ ТЕХНИКИ • Урок 1 из 4
          </div>
          <h1 className="text-4xl font-bold mb-8">Режимы работы Claude Code</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              По умолчанию Claude спрашивает подтверждение на каждое изменение. Это безопасно, но медленно. В этом уроке — как настроить скорость агента под себя и как включить «думалку» для сложных задач.
            </p>

            <SectionHeader>ТРИ РЕЖИМА РЕДАКТИРОВАНИЯ</SectionHeader>

            <p>
              У Claude Code есть три уровня самостоятельности. От «ничего не делай сам» до «делай всё, только потом отчитайся».
            </p>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold text-blue-400">1. Plan Mode (план)</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Claude только думает и предлагает план. Ничего не создаёт и не меняет.
                  Идеально для сложных задач, где сначала нужно договориться о подходе.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold text-green-400">2. Ask Before Edits (спросить перед)</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Показывает каждое изменение и ждёт твоего «да». Самый безопасный режим.
                  Стоит по умолчанию. С него стартуют все новички.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="font-semibold text-yellow-400">3. Edit Automatically (автопилот)</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Правит сам без подтверждений. Быстро, но рискованно — если Claude
                  понял задачу не так, узнаешь об этом по факту.
                </p>
              </div>
            </div>

            <InfoBlock>
              <p className="font-semibold mb-2">Главный принцип:</p>
              <p>
                <strong>Стартуй с Ask Before Edits.</strong> Чем больше доверяешь агенту
                в конкретной задаче — тем быстрее режим. Но осторожность никогда
                не помешает.
              </p>
            </InfoBlock>

            <SectionHeader>КАК ПЕРЕКЛЮЧАТЬ</SectionHeader>

            <p>
              Внизу панели Claude Code есть иконка режима. Клик по ней — выпадает меню выбора:
            </p>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg my-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  <div>
                    <p className="font-semibold">Plan Mode</p>
                    <p className="text-sm text-[var(--text-secondary)]">Для обсуждения подхода</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✋</span>
                  <div>
                    <p className="font-semibold">Ask Before Edits</p>
                    <p className="text-sm text-[var(--text-secondary)]">Для контролируемой работы</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-semibold">Edit Automatically</p>
                    <p className="text-sm text-[var(--text-secondary)]">Для рутины и доверенных задач</p>
                  </div>
                </li>
              </ul>
            </div>

            <SectionHeader>КОГДА ВКЛЮЧАТЬ AUTO EDIT</SectionHeader>

            <p>Автопилот — кайф, но с ним нужна разумность. Включай, когда:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-green-900/20 border border-green-700 p-4 rounded">
                <p className="font-semibold text-green-400 mb-2">Хорошо:</p>
                <ul className="space-y-1 text-sm">
                  <li>✅ Простые задачи, где сложно ошибиться</li>
                  <li>✅ Массовое переименование / форматирование</li>
                  <li>✅ Создание по готовому шаблону</li>
                  <li>✅ Ты сидишь рядом и следишь</li>
                </ul>
              </div>

              <div className="bg-red-900/20 border border-red-700 p-4 rounded">
                <p className="font-semibold text-red-400 mb-2">Плохо:</p>
                <ul className="space-y-1 text-sm">
                  <li>❌ Удаление файлов</li>
                  <li>❌ Работа с конфигами/секретами</li>
                  <li>❌ Первый раз что-то новое</li>
                  <li>❌ Когда отошёл от компа</li>
                </ul>
              </div>
            </div>

            <SectionHeader>EXTENDED THINKING — «ДУМАЙ ДОЛЬШЕ»</SectionHeader>

            <p>
              Отдельная настройка, не связанная с режимами редактирования. Включает у Claude «глубокое думание» перед ответом. Агент тратит больше времени, но и понимает задачу полнее.
            </p>

            <p>
              Найди иконку «мозга» в нижней панели Claude Code. Клик — включил. Клик ещё раз — выключил.
            </p>

            <InfoBlock variant="blue">
              <p>
                <strong>Минус:</strong> ответы приходят дольше. Минуты вместо секунд.
                Каждый вызов тратит больше токенов из твоей подписки.
              </p>
            </InfoBlock>

            <p>Когда стоит включать extended thinking:</p>

            <ul className="space-y-2 my-4">
              <li>→ Сложная задача с множеством файлов</li>
              <li>→ Архитектурные решения на уровне всего проекта</li>
              <li>→ Баг, который не можешь поймать несколько подходов</li>
              <li>→ Нужен очень качественный ответ — не сейчас, а правильный</li>
            </ul>

            <p>
              Для простых правок «сделай кнопку синей» extended thinking лишний.
              Тратится время впустую.
            </p>

            <SectionHeader>ВЫДЕЛЕНИЕ КОДА КАК КОНТЕКСТ</SectionHeader>

            <p>
              Ещё одна фича уровня профи: выделение кода в редакторе VS Code автоматически попадает в контекст Claude.
            </p>

            <div className="space-y-3 my-4">
              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)] font-bold">1.</div>
                <p>Открой файл в VS Code</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)] font-bold">2.</div>
                <p>Выдели мышкой нужный кусок кода</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)] font-bold">3.</div>
                <p>В чате Claude напиши: «что здесь происходит?» — он будет отвечать именно про выделенный кусок</p>
              </div>
            </div>

            <p>
              Так намного точнее, чем копипастить куски кода руками. Claude видит и файл, и конкретное место — отвечает по существу.
            </p>

            <SectionHeader>СТРАТЕГИЯ ПОД РАЗНЫЕ ЗАДАЧИ</SectionHeader>

            <p>
              Практический выбор режима под типовые сценарии:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-[var(--bg-card)] p-6 rounded-lg">
                <p className="font-semibold mb-2">Новая архитектурная задача</p>
                <p className="text-sm">
                  <span className="text-blue-400">Plan Mode</span> + Extended Thinking.
                  Сначала обсудить план, только потом писать код.
                </p>
              </div>

              <div className="bg-[var(--bg-card)] p-6 rounded-lg">
                <p className="font-semibold mb-2">Стандартная разработка</p>
                <p className="text-sm">
                  <span className="text-green-400">Ask Before Edits</span>. Видишь каждое
                  изменение, можешь остановить.
                </p>
              </div>

              <div className="bg-[var(--bg-card)] p-6 rounded-lg">
                <p className="font-semibold mb-2">Рутина и косметика</p>
                <p className="text-sm">
                  <span className="text-yellow-400">Edit Automatically</span>. Переименовать,
                  добавить комментарии, форматирование. Пусть делает сам.
                </p>
              </div>

              <div className="bg-[var(--bg-card)] p-6 rounded-lg">
                <p className="font-semibold mb-2">Серьёзный баг</p>
                <p className="text-sm">
                  <span className="text-green-400">Ask Before Edits</span> + Extended Thinking.
                  Агент думает дольше и показывает каждый шаг починки.
                </p>
              </div>
            </div>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Ты стартуешь вайб-кодинг на Ask Before Edits. По мере того как чувствуешь агента — добавляешь Auto Edit для рутины. Для больших задач — Plan Mode и Extended Thinking. Всё подстраивается под твой темп.
            </p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-4">Что ты узнал:</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ Три режима редактирования: Plan / Ask Before / Auto Edit</li>
                <li>✅ Когда включать автопилот, а когда нет</li>
                <li>✅ Extended Thinking — «думай дольше»</li>
                <li>✅ Выделение кода как способ передать точный контекст</li>
                <li>✅ Какой режим выбирать под разные типы задач</li>
              </ul>
            </div>

            <p>
              В следующем уроке разберём Git глубже — как работать с ветками, разруливать конфликты и откатываться на любую точку истории.
            </p>

            <p className="text-lg font-semibold mt-8">
              Погнали в Git-магию! 🚀
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
