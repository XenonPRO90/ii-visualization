import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import CodeBlock from '@/components/CodeBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';

export default function Lesson() {
  const moduleSlug = 'module-1';
  const lessonSlug = 'lesson-6';
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
              { label: 'Твой первый результат в браузере' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 1: УСТАНОВКА • Урок 6 из 7
          </div>
          <h1 className="text-4xl font-bold mb-8">Твой первый результат в браузере</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Ты создал файлы — круто. Но пока это просто значки в панели слева. Пора увидеть свой проект живым, в настоящем браузере. Этот момент — чистый кайф.
            </p>

            <SectionHeader>ЧТО ТАКОЕ LOCALHOST</SectionHeader>

            <p>
              Localhost — это твой собственный компьютер, который на пару минут становится веб-сервером. Только для тебя. Никто из интернета туда не попадёт.
            </p>

            <p>
              Когда ты запускаешь дев-сервер, Claude поднимает мини-сайт прямо у тебя на машине. Браузер открывает его по адресу <code>http://localhost:3000</code> — и всё, ты смотришь на свой проект так, будто он уже в интернете.
            </p>

            <InfoBlock>
              <p className="font-semibold mb-2">Главная идея:</p>
              <p>
                <strong>Localhost = репетиция перед премьерой.</strong> Ты всё видишь,
                пробуешь, ломаешь, чинишь — но никто кроме тебя этого не видит.
              </p>
            </InfoBlock>

            <SectionHeader>ЗАПУСКАЕМ ДЕВ-СЕРВЕР</SectionHeader>

            <p>Никаких сложных команд учить не надо. Просто попроси Claude:</p>

            <CodeBlock>
              Запусти дев-сервер
            </CodeBlock>

            <p className="mt-4">
              Claude посмотрит на проект, поймёт что за стек (Next.js, Vite, обычный html и т.д.) и запустит нужную команду. Чаще всего это:
            </p>

            <CodeBlock language="bash">
              {`npm run dev`}
            </CodeBlock>

            <p className="mt-4">
              В панели терминала снизу ты увидишь что-то типа:
            </p>

            <div className="bg-[var(--bg-card)] p-6 rounded-lg my-6">
              <pre className="text-sm leading-relaxed">
{`  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Network:      http://192.168.1.42:3000

  ✓ Ready in 1.2s`}
              </pre>
            </div>

            <p>
              Значит сервер живой. Копируй адрес <code>http://localhost:3000</code> в браузер — и вот он, твой проект.
            </p>

            <SectionHeader>ДВА АДРЕСА: LOCAL И NETWORK</SectionHeader>

            <p>
              В выводе выше Claude показал два адреса. Разберёмся, зачем их два:
            </p>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Local — <code>http://localhost:3000</code></p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Открывается только на этом компе. В 99% случаев работаешь с ним.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Network — <code>http://192.168.1.42:3000</code></p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Это адрес в твоём домашнем Wi-Fi. Открывается с телефона, планшета,
                  другого ноутбука — если они в той же сети.
                </p>
              </div>
            </div>

            <InfoBlock variant="blue">
              <p>
                <strong>Фишка:</strong> открой Network-адрес на телефоне и смотри свой
                сайт сразу в мобильной версии. Как это будет выглядеть у твоих
                пользователей.
              </p>
            </InfoBlock>

            <SectionHeader>HOT RELOAD — МАГИЯ НА ЛЕТУ</SectionHeader>

            <p>
              Пока дев-сервер запущен — можешь править код как угодно. Меняешь цвет кнопки, сохраняешь файл — и <strong>браузер сам обновляется за полсекунды</strong>. Никаких F5 не нужно.
            </p>

            <p>Это и называется hot reload. Один из самых приятных моментов в работе:</p>

            <ul className="space-y-2 my-4">
              <li>→ Пишешь Claude: «сделай заголовок побольше»</li>
              <li>→ Claude меняет файл</li>
              <li>→ Браузер мгновенно показывает результат</li>
              <li>→ Не нравится — «сделай поменьше», ещё раз, ещё раз</li>
            </ul>

            <p className="mt-4">
              Один экран с кодом, второй с браузером — и ты видишь каждую правку в реальном времени. Попробуй — затягивает.
            </p>

            <SectionHeader>КАК ОСТАНОВИТЬ СЕРВЕР</SectionHeader>

            <p>
              Когда закончил работать — серверу можно дать отдохнуть. Два способа:
            </p>

            <div className="space-y-4 my-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Способ 1: Через Claude</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Просто напиши в чат: <em>«останови дев-сервер»</em>. Claude сам всё выключит.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Способ 2: Клавишами</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Клик в окно терминала (снизу VS Code) → нажми{' '}
                  <code>Ctrl+C</code> (на Mac тоже Ctrl, не Cmd).
                </p>
              </div>
            </div>

            <InfoBlock variant="blue">
              <p>
                <strong>Не обязательно закрывать вручную.</strong> Если закроешь VS Code —
                сервер остановится сам. Если просто забыл — тоже ничего страшного, он
                просто занимает порт.
              </p>
            </InfoBlock>

            <SectionHeader>ЧАСТАЯ ПРОБЛЕМА: ПОРТ ЗАНЯТ</SectionHeader>

            <p>
              Иногда вместо <code>localhost:3000</code> Claude напишет <code>localhost:3001</code> или <code>8081</code>. Это нормально.
            </p>

            <p>
              Значит старый сервер не закрылся до конца и держит порт 3000 занятым.
              Claude сам выберет свободный — просто открывай тот адрес, который он показал.
            </p>

            <InfoBlock variant="blue">
              <p>
                <strong>Если запутался в портах</strong> — попроси Claude: «убей все дев-серверы
                и запусти заново». Он всё почистит.
              </p>
            </InfoBlock>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Теперь у тебя есть способ видеть результат за секунду. Это меняет весь процесс — ты больше не кодишь «вслепую», ты сразу смотришь, как оно работает.
            </p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-4">Что ты узнал:</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ Что такое localhost и зачем он нужен</li>
                <li>✅ Как запустить дев-сервер через Claude</li>
                <li>✅ Разницу между Local и Network адресами</li>
                <li>✅ Как работает hot reload</li>
                <li>✅ Как остановить сервер и что делать, когда порт занят</li>
              </ul>
            </div>

            <p>
              В следующем уроке научимся сохранять свою работу так, чтобы её нельзя было потерять никогда — даже если сломается компьютер. Это GitHub, и без него в вайб-кодинге никуда.
            </p>

            <p className="text-lg font-semibold mt-8">
              Погнали сохраняться в облако! 🚀
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
