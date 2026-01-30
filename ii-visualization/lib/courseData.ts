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
      { id: 'section-1', title: 'База данных', slug: 'section-1', isActive: false },
      { id: 'section-2', title: 'Хостинги', slug: 'section-2', isActive: false },
      { id: 'section-3', title: 'Домены', slug: 'section-3', isActive: false },
      { id: 'section-4', title: 'Авторизация', slug: 'section-4', isActive: false },
      { id: 'section-5', title: 'Безопасность', slug: 'section-5', isActive: false },
      { id: 'section-6', title: 'Приём оплат', slug: 'section-6', isActive: false },
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
