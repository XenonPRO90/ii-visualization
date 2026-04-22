import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import CodeBlock from '@/components/CodeBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';

export default function Lesson() {
  const moduleSlug = 'module-2';
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
              { label: 'Модуль 2: Как работать с Claude Code', href: '/modules/module-2' },
              { label: 'Скриншоты и файлы' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 2: КАК РАБОТАТЬ С CLAUDE CODE • Урок 4 из 5
          </div>
          <h1 className="text-4xl font-bold mb-8">Скриншоты и файлы — показываем, а не описываем</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Иногда объяснить словами сложнее, чем просто показать картинку. Ошибка на экране, макет из Фигмы, скрин из Телеграма — всё это можно кидать прямо в чат с Claude. Он видит и понимает.
            </p>

            <SectionHeader>КОГДА НУЖЕН СКРИНШОТ</SectionHeader>

            <p>
              Есть три типичных случая, когда картинка в миллион раз полезнее текста:
            </p>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">1. Ошибка на экране</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Красное сообщение в браузере, непонятный текст в терминале — скриншот вместо копипасты.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">2. Макет дизайна</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Нашёл красивый сайт или сделал макет в Фигме — скрин Claude, и он повторит стиль.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">3. Результат, который не нравится</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Что-то сверстано криво. Скриншот + «поправь вот это» — и Claude увидит проблему твоими глазами.
                </p>
              </div>
            </div>

            <InfoBlock>
              <p className="font-semibold mb-2">Главный принцип:</p>
              <p>
                <strong>Глаза быстрее слов.</strong> Если можешь показать — показывай.
                Одна картинка экономит 10 минут описания.
              </p>
            </InfoBlock>

            <SectionHeader>КАК СДЕЛАТЬ СКРИНШОТ</SectionHeader>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">На Mac:</h3>
                <div className="bg-[var(--bg-card)] p-4 rounded">
                  <p><code className="text-lg">Cmd+Shift+4</code> — выделяешь область</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    Скриншот упадёт на рабочий стол как файл. Или сразу в буфер обмена, если держать ещё и Ctrl.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">На Windows:</h3>
                <div className="bg-[var(--bg-card)] p-4 rounded">
                  <p><code className="text-lg">Win+Shift+S</code> — выделяешь область</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    Скриншот сразу копируется в буфер обмена — готов к вставке.
                  </p>
                </div>
              </div>
            </div>

            <SectionHeader>ВСТАВЛЯЕМ СКРИНШОТ В ЧАТ</SectionHeader>

            <p>
              Всё просто до банальности. Сделал скрин — кликнул в поле ввода Claude — нажал <code>Cmd+V</code> (или <code>Ctrl+V</code>). Картинка появится прямо в сообщении. Всё.
            </p>

            <div className="bg-[var(--accent-purple)]/20 border border-[var(--accent-purple)] p-6 rounded-lg my-6">
              <p className="font-semibold mb-3">Формула работы:</p>
              <div className="bg-[var(--bg-card)] p-4 rounded">
                <p className="text-lg text-center">
                  Скриншот + короткое пояснение
                </p>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mt-3">
                Одна картинка без текста работает хуже. Claude должен понять, что именно ты от него хочешь — починить, повторить, объяснить.
              </p>
            </div>

            <SectionHeader>ПРИМЕР: ПОКАЗЫВАЕМ ОШИБКУ</SectionHeader>

            <p>
              Проект сломался. Красная надпись в браузере. Что делать?
            </p>

            <div className="space-y-3 my-4">
              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)] font-bold">1.</div>
                <p>Делаешь скриншот ошибки в браузере</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)] font-bold">2.</div>
                <p>Вставляешь в чат <code>Cmd+V</code></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[var(--accent-purple)] font-bold">3.</div>
                <p>Пишешь рядом:</p>
              </div>
            </div>

            <CodeBlock>
              Вот такая ошибка после того, как я попросил тебя добавить форму. Поправь.
            </CodeBlock>

            <p className="mt-4">
              Claude прочитает текст ошибки прямо с картинки, поймёт причину и исправит код. Никаких «скопируй текст ошибки в чат» не нужно.
            </p>

            <SectionHeader>ПРИКРЕПЛЯЕМ ФАЙЛЫ</SectionHeader>

            <p>
              Кроме скриншотов можно прикреплять любые файлы — PDF, txt, картинки, документы. Два способа:
            </p>

            <div className="space-y-4 my-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Способ 1: Команда /attach</h3>
                <p>В поле ввода чата набери:</p>
                <CodeBlock>/attach</CodeBlock>
                <p className="text-sm text-[var(--text-secondary)] mt-2">
                  Откроется выбор файла — тыкаешь нужный, и он добавляется к сообщению.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Способ 2: Перетаскиванием</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Просто перетащи файл из Finder / Проводника прямо в поле чата. Работает как с обычными документами.
                </p>
              </div>
            </div>

            <InfoBlock variant="blue">
              <p>
                <strong>Примеры полезных вложений:</strong> PDF с тех. заданием, экспорт
                макета из Фигмы, CSV с данными для импорта, лог ошибки из терминала.
              </p>
            </InfoBlock>

            <SectionHeader>НАВИГАЦИЯ ПО ПРОЕКТУ</SectionHeader>

            <p>
              Ещё один приём — показывать Claude не скриншот, а сам файл в проекте. Он умеет читать любой файл из твоей папки и понимать его.
            </p>

            <p>Полезные запросы:</p>

            <ul className="space-y-2 my-4">
              <li>→ <em>«Посмотри файл app.js и объясни, что он делает»</em></li>
              <li>→ <em>«Найди в проекте все места, где используется цвет #FF5733»</em></li>
              <li>→ <em>«Какой файл запускается первым?»</em></li>
              <li>→ <em>«Покажи структуру папки src»</em></li>
            </ul>

            <p className="mt-4">
              Claude видит весь проект целиком. Тебе не нужно копировать кусочки кода — он сам откроет что нужно.
            </p>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Теперь у тебя есть все способы дать Claude максимум контекста — словами, файлами, картинками. Меньше непонимания — лучше результат.
            </p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-4">Что ты узнал:</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ Когда картинка полезнее слов</li>
                <li>✅ Как делать скриншот на Mac и Windows</li>
                <li>✅ Как вставлять скрин в чат Claude</li>
                <li>✅ Формула: скриншот + короткое пояснение</li>
                <li>✅ Как прикреплять файлы через /attach или перетаскиванием</li>
              </ul>
            </div>

            <p>
              В следующем уроке научишься работать в нескольких чатах одновременно. Это одна из самых приятных фишек Claude Code — пока один агент думает, второй уже делает.
            </p>

            <p className="text-lg font-semibold mt-8">
              Погнали умножать агентов! 🚀
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
