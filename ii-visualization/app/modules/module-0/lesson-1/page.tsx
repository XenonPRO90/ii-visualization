import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';
import Image from 'next/image';

export default function Lesson() {
  const moduleSlug = 'module-0';
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
              { label: 'Модуль 0: Установка', href: '/modules/module-0' },
              { label: 'Что такое вайб-кодинг' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 0: УСТАНОВКА • Урок 1 из 5
          </div>
          <h1 className="text-4xl font-bold mb-8">Что такое вайб-кодинг и Claude Code</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Прежде чем устанавливать инструменты, давай разберемся, что вообще такое
              вайб-кодинг и почему это меняет правила игры для предпринимателей.
            </p>

            <SectionHeader>ЧТО ТАКОЕ ВАЙБ-КОДИНГ</SectionHeader>

            <p>
              Вайб-кодинг — это когда ты <strong>голосом</strong> говоришь, что тебе надо,
              и получаешь нужный результат. Не печатаешь код, не мучаешься с синтаксисом,
              не тратишь годы на обучение.
            </p>

            <p>Ты просто:</p>
            <ol className="space-y-2">
              <li>Объясняешь свою идею голосом (или текстом)</li>
              <li>AI-агент понимает тебя и начинает работать</li>
              <li>Получаешь готовый проект: сайт, приложение, автоматизацию</li>
            </ol>

            <InfoBlock>
              <p className="font-semibold mb-2">Главный принцип вайб-кодинга:</p>
              <p>
                <strong>Сначала результат, потом понимание.</strong>
              </p>
              <p className="mt-2">
                Не нужно учиться программированию 5 лет, чтобы запустить свой проект.
                Ты делаешь проект СЕЙЧАС, а потом уже разбираешься, как он работает.
              </p>
            </InfoBlock>

            <SectionHeader>ПОЧЕМУ CLAUDE CODE</SectionHeader>

            <p>
              Claude Code — это самый мощный AI-агент для разработки, который доступен
              обычным людям. Он умеет:
            </p>

            <ul className="space-y-2">
              <li>✅ Создавать сайты и приложения с нуля</li>
              <li>✅ Писать и редактировать код</li>
              <li>✅ Искать информацию в интернете</li>
              <li>✅ Работать с файлами на твоем компьютере</li>
              <li>✅ Запускать параллельно несколько задач</li>
              <li>✅ Исправлять ошибки и учиться на них</li>
            </ul>

            <p>
              И самое крутое — он работает <strong>почти автономно</strong>. Ты даешь задачу,
              уходишь попить кофе, возвращаешься — готово.
            </p>

            <div className="my-8 rounded-lg overflow-hidden border border-[var(--border)]">
              <Image
                src="/screens/1_X5HVSnKyzBYSaiwrciIrxQ.webp"
                alt="Welcome to Claude Code"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>

            <SectionHeader>ДЛЯ КОГО ЭТО</SectionHeader>

            <p>
              Этот курс создан специально для <strong>предпринимателей</strong>, которые:
            </p>

            <ul className="space-y-2">
              <li>🎯 Видят возможности там, где другие не видят</li>
              <li>🎯 Хотят запускать проекты быстро, без команды разработчиков</li>
              <li>🎯 Понимают суть, но не хотят тратить годы на изучение кода</li>
              <li>🎯 Готовы работать налегке и не париться</li>
            </ul>

            <InfoBlock variant="blue">
              <p>
                <strong>Важно:</strong> Тебе НЕ нужно быть программистом. Тебе НЕ нужен опыт.
                Тебе нужна только идея и желание делать.
              </p>
            </InfoBlock>

            <SectionHeader>ЧТО ТЫ СМОЖЕШЬ СОЗДАТЬ</SectionHeader>

            <p>После прохождения курса ты сможешь голосом создавать:</p>

            <ul className="space-y-3">
              <li>
                <strong>Лендинги и сайты</strong> — для твоих продуктов и сервисов
              </li>
              <li>
                <strong>Веб-приложения</strong> — CRM, дашборды, инструменты для бизнеса
              </li>
              <li>
                <strong>Автоматизации</strong> — AI-агенты, которые работают за тебя
              </li>
              <li>
                <strong>MVP стартапов</strong> — за 2-3 дня вместо 3-6 месяцев
              </li>
            </ul>

            <SectionHeader>КАК ЭТО РАБОТАЕТ</SectionHeader>

            <p>Процесс очень простой:</p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg space-y-4 my-6">
              <div>
                <div className="font-semibold text-[var(--accent-purple)] mb-1">
                  1. Установка инструментов
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Visual Studio Code + Claude Code + AquaVoice (для голоса)
                </p>
              </div>

              <div>
                <div className="font-semibold text-[var(--accent-purple)] mb-1">
                  2. Говоришь, что хочешь
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Голосом или текстом объясняешь свою идею агенту
                </p>
              </div>

              <div>
                <div className="font-semibold text-[var(--accent-purple)] mb-1">
                  3. Агент исследует
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Ищет информацию, анализирует, готовит план (80% времени)
                </p>
              </div>

              <div>
                <div className="font-semibold text-[var(--accent-purple)] mb-1">
                  4. Агент создает
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Пишет код, собирает проект (20% времени)
                </p>
              </div>

              <div>
                <div className="font-semibold text-[var(--accent-purple)] mb-1">
                  5. Ты получаешь результат
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Работающий проект, который можно показать клиентам
                </p>
              </div>
            </div>

            <InfoBlock>
              <p className="font-semibold mb-2">Правило 80/20:</p>
              <p>
                80% времени агент <strong>исследует и планирует</strong>, только 20% —
                пишет код. Это ключ к качественному результату.
              </p>
            </InfoBlock>

            <SectionHeader>ФИЛОСОФИЯ ВАЙБ-КОДИНГА</SectionHeader>

            <p>Несколько важных принципов, которые помогут тебе:</p>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Работай налегке</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Не пытайся сразу все понять. Просто делай. Понимание придет потом.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Не торопись с разработкой</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Сначала агент должен собрать ВСЮ информацию. Потом — делать.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Документация СНАЧАЛА</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Все должно быть прописано в файлах ДО того, как агент начнет писать код.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Сомневайся</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Заставляй агента критически смотреть на свои решения. Это улучшит результат.
                </p>
              </div>
            </div>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Теперь, когда ты понимаешь концепцию, давай установим все необходимые
              инструменты. В следующих уроках мы шаг за шагом настроим:
            </p>

            <ul className="space-y-2">
              <li>Visual Studio Code — среда для работы</li>
              <li>AquaVoice — программа для голосового ввода</li>
              <li>Claude Code — сам AI-агент</li>
            </ul>

            <p className="text-lg font-semibold mt-8">
              Погнали создавать будущее! 🚀
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
