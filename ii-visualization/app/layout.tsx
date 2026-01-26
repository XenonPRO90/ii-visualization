import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import AccessGate from '@/components/AccessGate';

export const metadata: Metadata = {
  title: 'ИИ-визация | Курс по вайб-кодингу',
  description: 'Образовательная платформа для изучения вайб-кодинга с Claude Code и AquaVoice',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Загрузка...</div>}>
          <AccessGate>{children}</AccessGate>
        </Suspense>
      </body>
    </html>
  );
}
