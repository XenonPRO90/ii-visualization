'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { isValidAccessCode, saveAccessCode, hasAccess } from '@/lib/accessControl';

export default function AccessGate({ children }: { children: React.ReactNode }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check for code in URL
    const urlCode = searchParams.get('code');

    if (urlCode && isValidAccessCode(urlCode)) {
      saveAccessCode(urlCode);
      setIsAuthorized(true);
      setIsLoading(false);
      return;
    }

    // Check for stored code
    if (hasAccess()) {
      setIsAuthorized(true);
    }

    setIsLoading(false);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isValidAccessCode(code)) {
      saveAccessCode(code);
      setIsAuthorized(true);
    } else {
      setError('Неверный код доступа');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[var(--text-secondary)]">Загрузка...</div>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">ИИ-визация</h1>
            <p className="text-[var(--text-secondary)]">
              Курс по вайб-кодингу для выпускников
            </p>
          </div>

          <div className="bg-[var(--bg-secondary)] p-8 rounded-lg border border-[var(--border)]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="code" className="block text-sm font-medium mb-2">
                  Код доступа
                </label>
                <input
                  type="text"
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-[var(--bg-card)] border border-[var(--border)] focus:outline-none focus:border-[var(--accent-purple)] text-[var(--text-primary)]"
                  placeholder="Введите код"
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}

              <button
                type="submit"
                className="w-full py-2 px-4 bg-[var(--accent-purple)] hover:bg-[var(--accent-indigo)] rounded font-medium transition-colors"
              >
                Войти
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-[var(--border)] text-sm text-[var(--text-secondary)]">
              <p className="mb-2">У вас еще нет кода?</p>
              <p>Получите доступ к курсу через Telegram-группу выпускников</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
