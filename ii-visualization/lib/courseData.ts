export interface Lesson {
  id: string;
  title: string;
  slug: string;
  isActive: boolean;
}

export interface Module {
  id: string;
  title: string;
  slug: string;
  lessons: Lesson[];
  isActive: boolean;
}

export const courseData: Module[] = [
  {
    id: 'module-0',
    title: 'Модуль 0: Установка инструментов',
    slug: 'module-0',
    isActive: true,
    lessons: [
      {
        id: 'lesson-1',
        title: 'Что такое вайб-кодинг и Claude Code',
        slug: 'lesson-1',
        isActive: true,
      },
      {
        id: 'lesson-2',
        title: 'Установка Visual Studio Code',
        slug: 'lesson-2',
        isActive: true,
      },
      {
        id: 'lesson-3',
        title: 'Установка AquaVoice',
        slug: 'lesson-3',
        isActive: true,
      },
      {
        id: 'lesson-4',
        title: 'Установка расширения Claude Code',
        slug: 'lesson-4',
        isActive: true,
      },
      {
        id: 'lesson-5',
        title: 'Твой первый проект',
        slug: 'lesson-5',
        isActive: true,
      },
    ],
  },
  {
    id: 'module-1',
    title: 'Модуль 1: Основы работы',
    slug: 'module-1',
    isActive: true,
    lessons: [
      {
        id: 'lesson-1',
        title: 'Интерфейс Claude Code',
        slug: 'lesson-1',
        isActive: true,
      },
      {
        id: 'lesson-2',
        title: 'Как разговаривать с Claude',
        slug: 'lesson-2',
        isActive: true,
      },
      {
        id: 'lesson-3',
        title: 'Работа с файлами',
        slug: 'lesson-3',
        isActive: true,
      },
      {
        id: 'lesson-4',
        title: 'Исследование перед разработкой',
        slug: 'lesson-4',
        isActive: true,
      },
      {
        id: 'lesson-5',
        title: 'Документация и чек-листы',
        slug: 'lesson-5',
        isActive: true,
      },
    ],
  },
  {
    id: 'module-2',
    title: 'Модуль 2: Публикация проекта в инет',
    slug: 'module-2',
    isActive: false,
    lessons: [
      { id: 'lesson-1', title: 'База данных: что это и зачем', slug: 'lesson-1', isActive: false },
      { id: 'lesson-2', title: 'Создаём проект в базе данных', slug: 'lesson-2', isActive: false },
      { id: 'lesson-3', title: 'Создаём первую таблицу', slug: 'lesson-3', isActive: false },
      { id: 'lesson-4', title: 'Подключаем БД к проекту', slug: 'lesson-4', isActive: false },
      { id: 'lesson-5', title: 'Сохраняем и показываем данные', slug: 'lesson-5', isActive: false },
      { id: 'lesson-6', title: 'Хостинг: что это и зачем нужен', slug: 'lesson-6', isActive: false },
      { id: 'lesson-7', title: 'Публикуем проект в интернет', slug: 'lesson-7', isActive: false },
      { id: 'lesson-8', title: 'Автоматические обновления', slug: 'lesson-8', isActive: false },
      { id: 'lesson-9', title: 'Покупаем домен', slug: 'lesson-9', isActive: false },
      { id: 'lesson-10', title: 'Подключаем домен к сайту', slug: 'lesson-10', isActive: false },
      { id: 'lesson-11', title: 'Зачем нужна авторизация', slug: 'lesson-11', isActive: false },
      { id: 'lesson-12', title: 'Настраиваем вход через Google', slug: 'lesson-12', isActive: false },
      { id: 'lesson-13', title: 'Добавляем вход в приложение', slug: 'lesson-13', isActive: false },
      { id: 'lesson-14', title: 'Безопасность: что такое RLS', slug: 'lesson-14', isActive: false },
      { id: 'lesson-15', title: 'Настраиваем правила доступа', slug: 'lesson-15', isActive: false },
      { id: 'lesson-16', title: 'Как работают платёжные системы', slug: 'lesson-16', isActive: false },
      { id: 'lesson-17', title: 'Правила платёжных систем', slug: 'lesson-17', isActive: false },
      { id: 'lesson-18', title: 'Подключаем приём платежей', slug: 'lesson-18', isActive: false },
      { id: 'lesson-19', title: 'Вебхук: обработка оплаты', slug: 'lesson-19', isActive: false },
      { id: 'lesson-20', title: 'Оплата через подписку на тг-канал', slug: 'lesson-20', isActive: false },
      { id: 'lesson-21', title: 'ТГ-бот с уведомлениями о $$$', slug: 'lesson-21', isActive: false },
      { id: 'lesson-22', title: 'Платежи для России: ЮKassa', slug: 'lesson-22', isActive: false },
      { id: 'lesson-23', title: 'Международные платежи: Stripe', slug: 'lesson-23', isActive: false },
      { id: 'lesson-24', title: 'Деплой бота на сервер', slug: 'lesson-24', isActive: false },
    ],
  },
  {
    id: 'module-3',
    title: 'Модуль 3: Проекты для предпринимателей',
    slug: 'module-3',
    isActive: false,
    lessons: [],
  },
  {
    id: 'module-4',
    title: 'Модуль 4: Продвинутые техники',
    slug: 'module-4',
    isActive: false,
    lessons: [],
  },
];

export function getModuleBySlug(slug: string) {
  return courseData.find((module) => module.slug === slug);
}

export function getLessonBySlug(moduleSlug: string, lessonSlug: string) {
  const module = getModuleBySlug(moduleSlug);
  return module?.lessons.find((lesson) => lesson.slug === lessonSlug);
}

export function getNextLesson(moduleSlug: string, lessonSlug: string) {
  const moduleIndex = courseData.findIndex((m) => m.slug === moduleSlug);
  if (moduleIndex === -1) return null;

  const module = courseData[moduleIndex];
  const lessonIndex = module.lessons.findIndex((l) => l.slug === lessonSlug);

  // Next lesson in same module
  if (lessonIndex < module.lessons.length - 1) {
    return {
      moduleSlug,
      lesson: module.lessons[lessonIndex + 1],
    };
  }

  // First lesson of next module
  if (moduleIndex < courseData.length - 1) {
    const nextModule = courseData[moduleIndex + 1];
    if (nextModule.isActive && nextModule.lessons.length > 0) {
      return {
        moduleSlug: nextModule.slug,
        lesson: nextModule.lessons[0],
      };
    }
  }

  return null;
}

export function getPreviousLesson(moduleSlug: string, lessonSlug: string) {
  const moduleIndex = courseData.findIndex((m) => m.slug === moduleSlug);
  if (moduleIndex === -1) return null;

  const module = courseData[moduleIndex];
  const lessonIndex = module.lessons.findIndex((l) => l.slug === lessonSlug);

  // Previous lesson in same module
  if (lessonIndex > 0) {
    return {
      moduleSlug,
      lesson: module.lessons[lessonIndex - 1],
    };
  }

  // Last lesson of previous module
  if (moduleIndex > 0) {
    const prevModule = courseData[moduleIndex - 1];
    if (prevModule.isActive && prevModule.lessons.length > 0) {
      return {
        moduleSlug: prevModule.slug,
        lesson: prevModule.lessons[prevModule.lessons.length - 1],
      };
    }
  }

  return null;
}
