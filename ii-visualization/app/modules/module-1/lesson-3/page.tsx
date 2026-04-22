import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import CodeBlock from '@/components/CodeBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';
import Link from 'next/link';

export default function Lesson() {
  const moduleSlug = 'module-1';
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
              { label: 'Модуль 1: Установка', href: '/modules/module-1' },
              { label: 'Установка AquaVoice' },
            ]}
          />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ 1: УСТАНОВКА • Урок 3 из 5
          </div>
          <h1 className="text-4xl font-bold mb-8">Установка AquaVoice для голосового ввода</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Aqua Voice — это программа, которая превращает твой голос в текст. Именно она
              делает возможным вайб-кодинг — работу голосом вместо печати.
            </p>

            <SectionHeader>ЗАЧЕМ НУЖЕН ГОЛОСОВОЙ ВВОД</SectionHeader>

            <p>
              Когда ты печатаешь, ты медленный. Когда ты говоришь — ты быстрый и думаешь
              по-другому.
            </p>

            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="bg-red-900/20 border border-red-500/30 p-4 rounded">
                <div className="font-semibold mb-2 text-red-400">❌ Печать</div>
                <ul className="text-sm space-y-1 text-[var(--text-secondary)]">
                  <li>Медленно (40-60 слов/мин)</li>
                  <li>Приходится думать о грамматике</li>
                  <li>Устают руки</li>
                  <li>Скучно</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 p-4 rounded">
                <div className="font-semibold mb-2 text-green-400">✅ Голос</div>
                <ul className="text-sm space-y-1 text-[var(--text-secondary)]">
                  <li>Быстро (150-200 слов/мин)</li>
                  <li>Думаешь свободнее</li>
                  <li>Не устаешь</li>
                  <li>Кайф!</li>
                </ul>
              </div>
            </div>

            <InfoBlock>
              <p>
                <strong>Важно:</strong> Голосовой ввод задействует другую часть мозга. Ты
                начинаешь думать по-новому и находить решения, которые не пришли бы в голову
                при печати.
              </p>
            </InfoBlock>

            <SectionHeader>УСТАНОВКА AQUAVOICE</SectionHeader>

            <div className="bg-[var(--accent-purple)]/20 border border-[var(--accent-purple)] p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-3">Ссылка для установки:</h3>
              <div className="bg-[var(--bg-card)] p-4 rounded flex items-center justify-between">
                <code className="text-sm">https://aquavoice.com/share?code=MS-QW3P</code>
                <a
                  href="https://aquavoice.com/share?code=MS-QW3P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 px-4 py-2 bg-[var(--accent-purple)] hover:bg-[var(--accent-indigo)] rounded transition-colors text-sm"
                >
                  Открыть
                </a>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mt-3">
                Цена: ~$10/месяц. Стоит каждого цента.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Перейди по ссылке</h3>
                <p>
                  Открой ссылку выше в браузере. Ты увидишь страницу AquaVoice.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Скачай приложение</h3>
                <p className="mb-2">
                  Нажми кнопку "Download" для своей операционной системы:
                </p>
                <ul className="space-y-1">
                  <li>• <strong>Mac:</strong> Скачай .dmg файл</li>
                  <li>• <strong>Windows:</strong> Скачай .exe файл</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">3. Установи программу</h3>

                <div className="mt-4">
                  <div className="font-semibold text-sm mb-2">Для Mac:</div>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Открой скачанный .dmg файл</li>
                    <li>Перетащи AquaVoice в папку "Программы"</li>
                    <li>Запусти AquaVoice из "Программ"</li>
                    <li>Разреши доступ в настройках безопасности (если спросит)</li>
                  </ol>
                </div>

                <div className="mt-4">
                  <div className="font-semibold text-sm mb-2">Для Windows:</div>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Запусти скачанный .exe файл</li>
                    <li>Следуй инструкциям установщика</li>
                    <li>Запусти AquaVoice после установки</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">4. Настрой горячие клавиши</h3>
                <p className="mb-3">
                  После первого запуска открой настройки AquaVoice:
                </p>

                <InfoBlock variant="blue">
                  <p className="font-semibold mb-2">Рекомендуемая комбинация:</p>
                  <div className="bg-[var(--bg-card)] p-3 rounded">
                    <code>Ctrl + Shift + Space</code> (Windows)<br />
                    <code>Cmd + Shift + Space</code> (Mac)
                  </div>
                  <p className="text-sm mt-2">
                    Нажал — начал говорить. Отпустил — текст вставился.
                  </p>
                </InfoBlock>
              </div>
            </div>

            <SectionHeader>НАСТРОЙКА МИКРОФОНА</SectionHeader>

            <p>
              Чтобы AquaVoice хорошо распознавал голос, нужно правильно настроить микрофон:
            </p>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Проверь уровень громкости</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  В настройках системы найди раздел "Звук" → "Ввод" и убедись, что микрофон
                  активен и громкость на 70-80%
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Говори на расстоянии 15-20 см</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Не нужно кричать в микрофон. Говори нормальным голосом.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent-purple)] pl-4">
                <p className="font-semibold">Убери фоновый шум</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Закрой окна, выключи музыку. Тишина = точность.
                </p>
              </div>
            </div>

            <SectionHeader>ТЕСТИРОВАНИЕ</SectionHeader>

            <p>Давай проверим, что всё работает:</p>

            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-4">Простой тест:</h3>
              <ol className="space-y-3">
                <li>
                  <strong>1.</strong> Открой любой текстовый редактор (например, Блокнот или Notes)
                </li>
                <li>
                  <strong>2.</strong> Нажми свою горячую клавишу (например, Cmd+Shift+Space)
                </li>
                <li>
                  <strong>3.</strong> Скажи: <em>"Привет, я тестирую голосовой ввод"</em>
                </li>
                <li>
                  <strong>4.</strong> Отпусти клавишу
                </li>
              </ol>

              <div className="mt-4 p-4 bg-green-900/20 border border-green-500/30 rounded">
                <p className="text-sm">
                  <strong className="text-green-400">✅ Работает!</strong> Если текст появился —
                  всё настроено правильно.
                </p>
              </div>
            </div>

            <SectionHeader>АЛЬТЕРНАТИВЫ (ЕСЛИ НУЖНО)</SectionHeader>

            <p>
              Если AquaVoice по какой-то причине не подходит, есть другие варианты:
            </p>

            <div className="space-y-3 my-6">
              <div className="bg-[var(--bg-card)] p-4 rounded">
                <div className="font-semibold mb-1">Whisper Flow ($20/мес)</div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Чуть хуже точность, но тоже работает
                </p>
              </div>

              <div className="bg-[var(--bg-card)] p-4 rounded">
                <div className="font-semibold mb-1">Open Source варианты (бесплатно)</div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Можно найти, погуглив "Whisper voice input" для своей ОС
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  ⚠️ Сложнее в настройке, ниже качество
                </p>
              </div>

              <div className="bg-[var(--bg-card)] p-4 rounded">
                <div className="font-semibold mb-1">Встроенная диктовка ОС (бесплатно)</div>
                <p className="text-sm text-[var(--text-secondary)]">
                  На Mac: Fn+Fn, на Windows: Win+H
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  ⚠️ Работает хуже, но можно попробовать
                </p>
              </div>
            </div>

            <InfoBlock>
              <p>
                <strong>Наша рекомендация:</strong> Используй AquaVoice. $10/месяц — это копейки
                по сравнению с тем, сколько времени ты сэкономишь.
              </p>
            </InfoBlock>

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>

            <p>
              Отлично! Теперь у тебя есть:
            </p>

            <ul className="space-y-1">
              <li>✅ Visual Studio Code</li>
              <li>✅ AquaVoice для голосового ввода</li>
            </ul>

            <p className="mt-4">
              В следующем уроке мы установим самое главное — расширение Claude Code, которое
              превратит VS Code в мощный инструмент для вайб-кодинга.
            </p>

            <p className="text-lg font-semibold mt-6">
              Погнали дальше! 🎙️
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
