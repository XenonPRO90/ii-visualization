# Styleguide автора курса «Вайб-кодинг» (extracted from 10 existing lessons)

Референс для написания новых уроков в авторском голосе. Используется как контекст моделью при генерации.

## 1. Обращение к читателю
- Всегда на **«ты»** — "тебе", "твой", "твоё"
- Дружеский, неформальный — как опытный коллега в Slack
- Мотивирующий подтекст («ты можешь это»), не академизм
- Маркеры: "давай разберёмся", "Погнали", "Готов?"

## 2. Длина и ритм
- Абзацы короткие: **2-3 предложения, редко 4-5**
- Предложения 10-20 слов, часто побудительные/вопросительные
- Ритм: идея → уточнение/пример → переход
- Много «воздуха» через SectionHeader, InfoBlock, списки

## 3. Лексика — характерные слова автора
- **Маркеры-автоквоты:** "погнали", "работай налегке", "кайф", "кайфовать", "смешные деньги", "не пугайся", "отлично", "поздравляю", "это нормально", "правило 80/20", "золотое правило", "главный принцип"
- Англицизмы естественны: "вайб-кодинг", "AI-агент", "Claude Code", "MVP", "контекст", "фичи", "режим"
- Не использует: "элиминировать", "современный мир", формальщину
- Контрасты и цифры: "80% исследование, 20% разработка", "$20 вместо $10,000+"

## 4. Тон: смешанный
- Мотивирующий + экспертный + немного ироничный
- Не запугивает, не угнетает — вместо "это сложно" → "это просто, следуй шагам"
- Частое: "отлично", "поздравляю", "кайф", "готов"

## 5. Структура урока (порядок обязателен)

```
1. Breadcrumbs (Главная → Модуль → Название)
2. Метка: "МОДУЛЬ X: НАЗВАНИЕ • Урок Y из Z" (text-sm, text-secondary)
3. h1 заголовок (text-4xl font-bold, ёмкий, 10-15 слов)
4. Лид-абзац (text-lg text-secondary leading-relaxed mb-6) — ценность урока
5. Основные секции через <SectionHeader>[ СЕКЦИЯ ]</SectionHeader>
6. Финальная [ ЧТО ДАЛЬШЕ ] с пересказом (✅) и мотиватором 🚀/🎉
7. <LessonNavigation previousLesson={...} nextLesson={...} />
```

Реальные названия секций (всегда КАПС в `[ квадратных скобках ]`):
- `[ ЧТО ТАКОЕ ВАЙБ-КОДИНГ ]`, `[ УСТАНОВКА НА MAC ]`, `[ УСТАНОВКА НА WINDOWS ]`
- `[ ПЕРВЫЙ ЗАПУСК ]`, `[ ПРОВЕРКА УСТАНОВКИ ]`, `[ ГОРЯЧИЕ КЛАВИШИ ]`
- `[ РЕЖИМЫ РАБОТЫ ]`, `[ ЧТО ДАЛЬШЕ ]`

## 6. JSX-компоненты

### `<SectionHeader>TEXT</SectionHeader>`
Капс-заголовок в квадратных скобках. Перед каждой логической секцией.

### `<InfoBlock variant="purple" | "blue">...</InfoBlock>`
- `purple` (по умолчанию) — «золотые мысли», главные правила, ключевые инсайты
- `blue` — советы, уточнения, предупреждения
```jsx
<InfoBlock>
  <p className="font-semibold mb-2">Главный принцип вайб-кодинга:</p>
  <p><strong>Сначала результат, потом понимание.</strong></p>
</InfoBlock>

<InfoBlock variant="blue">
  <p><strong>Совет:</strong> Начни с режима "Ask Before Edits"...</p>
</InfoBlock>
```

### `<CodeBlock language?>...</CodeBlock>`
Для команд, путей, URL, примеров кода.
```jsx
<CodeBlock>https://code.visualstudio.com</CodeBlock>
<CodeBlock>Cmd+Shift+P</CodeBlock>
<CodeBlock language="bash">{`npm install`}</CodeBlock>
```

### Списки
- `<ol>` нумерованные — для пошаговых инструкций
- `<ul>` маркированные — для опций/свойств
- Ёмоджи-маркеры: ✅ ❌ 🎯 → ☐

### Специальные блоки
- **Плохо vs Хорошо:** `grid grid-cols-2`, слева красный фон, справа зелёный
- **Большой концепт:** `bg-accent-purple/20 border border-accent-purple`, text-center
- **Горячие клавиши:**
  ```jsx
  <div className="bg-[var(--accent-purple)]/20 border border-[var(--accent-purple)] p-6 rounded-lg my-6">
    <p className="font-semibold mb-3">Горячая клавиша для чата:</p>
    <div className="bg-[var(--bg-card)] p-4 rounded text-center">
      <code className="text-lg">Cmd+Shift+P</code> (Mac)<br />
      <code className="text-lg">Ctrl+Shift+P</code> (Windows)
    </div>
  </div>
  ```

## 7. Шаблон начала урока

```jsx
import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import InfoBlock from '@/components/InfoBlock';
import CodeBlock from '@/components/CodeBlock';
import LessonNavigation from '@/components/LessonNavigation';
import { getNextLesson, getPreviousLesson } from '@/lib/courseData';

export default function Lesson() {
  const moduleSlug = 'module-X';
  const lessonSlug = 'lesson-Y';
  const nextLesson = getNextLesson(moduleSlug, lessonSlug);
  const previousLesson = getPreviousLesson(moduleSlug, lessonSlug);

  return (
    <div className="flex min-h-screen">
      <Sidebar currentModule={moduleSlug} currentLesson={lessonSlug} />
      <main className="flex-1 ml-64">
        <article className="max-w-4xl mx-auto px-8 py-12">
          <Breadcrumbs items={[
            { label: 'Главная', href: '/' },
            { label: 'Модуль X: НАЗВАНИЕ', href: '/modules/module-X' },
            { label: 'Название урока' },
          ]} />

          <div className="text-sm text-[var(--text-secondary)] mb-2">
            МОДУЛЬ X: НАЗВАНИЕ • Урок Y из Z
          </div>
          <h1 className="text-4xl font-bold mb-8">Название урока</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Лид-абзац...
            </p>

            {/* Секции */}

            <SectionHeader>ЧТО ДАЛЬШЕ</SectionHeader>
            <p>Резюме...</p>
            <p className="text-lg font-semibold mt-8">Погнали дальше! 🚀</p>
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
```

## 8. Как подаются пошаговые инструкции

```jsx
<div className="space-y-4">
  <div>
    <h3 className="text-lg font-semibold mb-2">1. Скачай VS Code</h3>
    <p>Перейди на сайт:</p>
    <CodeBlock>https://code.visualstudio.com</CodeBlock>
    <p className="text-sm text-[var(--text-secondary)] mt-2">
      Нажми на большую синюю кнопку "Download for Mac"
    </p>
  </div>
  <div>
    <h3 className="text-lg font-semibold mb-2">2. Открой скачанный файл</h3>
    <p>Найди в папке "Загрузки" файл...</p>
  </div>
</div>
```

Для Mac/Windows параллельно — две подсекции под одним `<SectionHeader>`.

## 9. Стиль подачи «страшного»
- Не запугивает → информирует: "могут быть проблемы с доступом"
- Предупреждение в `<InfoBlock variant="blue">` с ⚠️
- Обязательно даёт решение / workaround
- Нейтрально-позитивный язык: "это важно!" (не "иначе сломается")

## 10. Заголовки уроков (из courseData.ts)
- Короткие, ёмкие: «Что такое вайб-кодинг и Claude Code»
- С глаголом действия или вопросом: «Установка VS Code», «Как разговаривать с Claude»
- Личное местоимение ок: «Твой первый проект»
- Без длинных подзаголовков

## Мини-примеры: «не в стиле» vs «в стиле»

**❌ НЕ в стиле (aizdec.me нейтрально-учительский):**
> «Для эффективной работы с системой необходимо понимание основных концепций. Документирование кода играет ключевую роль в поддержании проекта. Перед началом разработки следует проанализировать требования и составить план действий.»

**✅ В стиле автора:**
> «Документация СНАЧАЛА — золотое правило вайб-кодинга. Не спеши с разработкой. Сначала агент должен собрать ВСЮ информацию. Потом — делать. Это то, что отличает качественный результат от посредственного. Без плана Claude работает вхолостую, а с планом — работает как профи.»

## Главные правила для генерации новых уроков

1. Начать с лида (1-2 предложения о ценности для читателя)
2. Разбить на секции через `<SectionHeader>`
3. Каждую идею выделять отдельным блоком (InfoBlock/список/CodeBlock)
4. Абзацы 2-3 предложения
5. «Ты», неформально, мотивирующе
6. Вставлять авторские маркеры: «погнали», «работай налегке», «кайф», «смешные деньги»
7. Заканчивать `[ ЧТО ДАЛЬШЕ ]` + 🚀 или 🎉
8. В конце — `<LessonNavigation>`
