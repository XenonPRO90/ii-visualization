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
              { label: 'Модуль 1: Установка', href: '/modules/module-1' },
              { label: 'Сохраняем работу в облаке' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 1: УСТАНОВКА • Урок 7 из 7
          </div>
          <h1 className="text-4xl font-bold mb-8">Сохраняем работу в облаке</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Представь: ты потратил вечер, сделал крутую штуку — и тут комп зависает, обновляется, или ты случайно удаляешь папку. Работа пропала. GitHub решает эту боль раз и навсегда.
            </p>

            <SectionHeader>ЗАЧЕМ ЭТО НУЖНО</SectionHeader>

            <p>
              GitHub — это облачное хранилище для кода. Бесплатное. Работает как Dropbox, только умнее: хранит не только файлы, но и всю историю изменений.
            </p>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg my-6">
              <p className="font-semibold mb-3">Что даёт GitHub:</p>
              <ul className="space-y-2 text-sm">
                <li>→ <strong>Бэкап в облаке</strong> — ноут сломался, а код цел</li>
                <li>→ <strong>История изменений</strong> — можно вернуться в любую точку прошлого</li>
                <li>→ <strong>Откат поломанного</strong> — Claude что-то сломал? Одна команда — и всё как было</li>
                <li>→ <strong>Работа с разных устройств</strong> — открыл на другом компе, продолжил</li>
                <li>→ <strong>Твоё портфолио</strong> — реальные проекты, которые ты сделал</li>
              </ul>
            </div>

            <InfoBlock>
              <p className="font-semibold mb-2">Золотое правило вайб-кодинга:</p>
              <p>
                <strong>Не коммитишь — значит теряешь.</strong> Работа, которая не в
                GitHub, живёт на одном диске. А диски, как известно, умирают всегда
                не вовремя.
              </p>
            </InfoBlock>

            <SectionHeader>COMMIT И PUSH В ДВУХ СЛОВАХ</SectionHeader>

            <p>
              В мире Git есть два главных слова. Запоминаем на всю жизнь:
            </p>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Commit = «сохранился»</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Как save в видеоигре. Ты зафиксировал текущее состояние проекта с
                  коротким описанием: «добавил форму регистрации».
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Push = «отправил в облако»</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  После коммита нужно отправить его на GitHub. Иначе он живёт только
                  на твоём компе.
                </p>
              </div>
            </div>

            <p>
              Проще некуда: <strong>commit</strong> — сохранил у себя, <strong>push</strong> — отправил в облако. Всё.
            </p>

            <SectionHeader>СОЗДАЁМ АККАУНТ НА GITHUB</SectionHeader>

            <p>Если аккаунта ещё нет — сейчас сделаем. Это бесплатно и 2 минуты.</p>

            <div className="space-y-4 my-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Открой сайт</h3>
                <CodeBlock>https://github.com</CodeBlock>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Нажми Sign up</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Большая зелёная кнопка справа сверху.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">3. Заполни данные</h3>
                <ul className="text-sm space-y-1 text-[var(--text-secondary)]">
                  <li>• Email (лучше тот, которым пользуешься часто)</li>
                  <li>• Пароль</li>
                  <li>• Username — это твоё имя на GitHub, его увидят все, если проект публичный</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">4. Подтверди email</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  GitHub пришлёт письмо с кодом. Ввёл — готово.
                </p>
              </div>
            </div>

            <InfoBlock variant="blue">
              <p>
                <strong>Username выбирай с головой</strong> — его будет видно в ссылках
                на твои проекты. <code>github.com/твой-username/проект</code>. Лучше
                что-то нейтральное и короткое.
              </p>
            </InfoBlock>

            <SectionHeader>ПОДКЛЮЧАЕМ VS CODE К GITHUB</SectionHeader>

            <p>
              Теперь связываем VS Code с твоим аккаунтом, чтобы он мог заливать туда код.
            </p>

            <div className="space-y-4 my-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Открой командную палитру</h3>
                <div className="bg-[var(--bg-card)] p-4 rounded text-center">
                  <code className="text-lg">Cmd+Shift+P</code> (Mac)<br />
                  <code className="text-lg">Ctrl+Shift+P</code> (Windows)
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Впиши туда</h3>
                <CodeBlock>GitHub: Sign in</CodeBlock>
                <p className="text-sm text-[var(--text-secondary)] mt-2">
                  Выбери первый вариант из подсказки.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">3. Авторизуйся в браузере</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Откроется вкладка — нажми Authorize Visual Studio Code. VS Code
                  поймёт, что это ты, и всё.
                </p>
              </div>
            </div>

            <p>
              В левом нижнем углу VS Code теперь видно твой ник — значит связь установлена.
            </p>

            <SectionHeader>ПУБЛИКУЕМ ПРОЕКТ</SectionHeader>

            <p>
              Самый простой способ — попросить Claude. В чате пишешь:
            </p>

            <CodeBlock>
              Опубликуй этот проект на GitHub как приватный репозиторий
            </CodeBlock>

            <p className="mt-4">
              Claude сделает всё сам: инициализирует Git, создаст репозиторий на GitHub, зальёт туда файлы. Займёт секунд 30.
            </p>

            <InfoBlock variant="blue">
              <p>
                <strong>Public или Private?</strong> Private — видишь только ты. Public —
                виден всему интернету. Для учебных и личных проектов — всегда Private.
                Перевести на Public потом можно одной кнопкой.
              </p>
            </InfoBlock>

            <SectionHeader>ТВОЙ ПЕРВЫЙ КОММИТ</SectionHeader>

            <p>
              Теперь ты правишь код, что-то добавляешь — и хочешь это сохранить. В чате:
            </p>

            <CodeBlock>
              Сделай коммит с сообщением «добавил страницу контактов»
            </CodeBlock>

            <p className="mt-4">
              Claude зафиксирует все изменения и подпишет их твоим сообщением. Если хочешь сразу залить в облако — одним запросом:
            </p>

            <CodeBlock>
              Сделай коммит «правки дизайна» и запушь на GitHub
            </CodeBlock>

            <div className="bg-[var(--accent-purple)]/20 border border-[var(--accent-purple)] p-6 rounded-lg my-6">
              <p className="font-semibold mb-2">Хорошее сообщение коммита:</p>
              <ul className="space-y-1 text-sm">
                <li>✅ «добавил авторизацию через email»</li>
                <li>✅ «поправил бага с кнопкой на мобилке»</li>
                <li>✅ «переделал главный экран»</li>
              </ul>
              <p className="font-semibold mt-4 mb-2">Плохое:</p>
              <ul className="space-y-1 text-sm">
                <li>❌ «правки»</li>
                <li>❌ «фикс»</li>
                <li>❌ «ещё немного»</li>
              </ul>
            </div>

            <SectionHeader>ПРАВИЛО МАЛЕНЬКИХ ЧАСТЫХ КОММИТОВ</SectionHeader>

            <p>
              Главная ошибка новичков — коммитить раз в день, после 5 часов работы. Потом что-то ломается, и откатиться некуда.
            </p>

            <InfoBlock>
              <p className="font-semibold mb-2">Правило 30 минут:</p>
              <p>
                <strong>Сделал что-то рабочее — коммит.</strong> Маленькие частые коммиты
                — твоя страховка. Большие редкие — твоя боль при откате.
              </p>
            </InfoBlock>

            <p>Коммит имеет смысл делать, когда:</p>

            <ul className="space-y-2 my-4">
              <li>→ Добавил новую фичу и она работает</li>
              <li>→ Поправил баг</li>
              <li>→ Изменил дизайн части экрана</li>
              <li>→ Собираешься делать что-то рискованное (на всякий случай)</li>
              <li>→ Устал и хочешь отдохнуть</li>
            </ul>

            <SectionHeader>ЕСЛИ ВСЁ СЛОМАЛОСЬ — ОТКАТ</SectionHeader>

            <p>
              Клод что-то переписал, всё развалилось, ты паникуешь. Не паникуй. Если были коммиты — можно откатиться на любой из них.
            </p>

            <CodeBlock>
              Покажи последние коммиты и верни проект к тому, где всё работало
            </CodeBlock>

            <p className="mt-4">
              Claude покажет историю, ты выберешь нужную точку, и он вернёт код в то состояние. Как будто плохих правок и не было.
            </p>

            <InfoBlock variant="blue">
              <p>
                <strong>Вот ради этого мы и коммитим.</strong> Без коммитов откатываться
                некуда — и это самая болезненная ошибка новичков в вайб-кодинге.
              </p>
            </InfoBlock>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Отлично! Модуль 0 завершён. Ты установил всё что нужно, создал проект, увидел его в браузере и подключил облачный бэкап.
            </p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-4">Что ты узнал в Модуле 0:</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ Что такое вайб-кодинг и Claude Code</li>
                <li>✅ Установил VS Code</li>
                <li>✅ Установил AquaVoice</li>
                <li>✅ Установил Claude Code</li>
                <li>✅ Создал первый проект и пообщался с агентом голосом</li>
                <li>✅ Запустил дев-сервер и увидел проект в браузере</li>
                <li>✅ Подключил GitHub и освоил commit / push</li>
              </ul>
            </div>

            <p>
              В Модуле 2 копаем глубже — научимся по-настоящему работать с Claude Code. Как устроен интерфейс, как формулировать запросы, как читать diff-ы, как давать Claude контекст через скриншоты, и как вести несколько чатов параллельно.
            </p>

            <p className="text-lg font-semibold mt-8">
              Погнали в Модуль 2! 🚀
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
