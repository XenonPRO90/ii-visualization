// Access codes for the course
const VALID_CODES = ['ВЫПУСКНИК2026', 'DEMO', 'TEST'];

export function isValidAccessCode(code: string): boolean {
  return VALID_CODES.includes(code.toUpperCase());
}

export function saveAccessCode(code: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('ii-viz-access', code);
  }
}

export function getStoredAccessCode(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('ii-viz-access');
  }
  return null;
}

export function hasAccess(): boolean {
  const stored = getStoredAccessCode();
  return stored ? isValidAccessCode(stored) : false;
}

export function clearAccess(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('ii-viz-access');
  }
}
