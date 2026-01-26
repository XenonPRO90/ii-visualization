import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface LessonCardProps {
  title: string;
  href: string;
  icon: LucideIcon;
  isActive?: boolean;
}

export default function LessonCard({
  title,
  href,
  icon: Icon,
  isActive = true,
}: LessonCardProps) {
  const CardContent = () => (
    <div
      className={`bg-[var(--bg-card)] p-6 rounded-lg border border-[var(--border)] transition-all ${
        isActive
          ? 'hover:border-[var(--accent-purple)] hover:shadow-lg cursor-pointer'
          : 'opacity-50 cursor-not-allowed'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <Icon className="w-6 h-6 text-[var(--accent-purple)]" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-[var(--text-primary)]">{title}</h3>
        </div>
      </div>
    </div>
  );

  if (!isActive) {
    return <CardContent />;
  }

  return (
    <Link href={href}>
      <CardContent />
    </Link>
  );
}
