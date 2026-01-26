interface InfoBlockProps {
  children: React.ReactNode;
  variant?: 'purple' | 'blue';
}

export default function InfoBlock({ children, variant = 'purple' }: InfoBlockProps) {
  const bgColor =
    variant === 'purple' ? 'bg-purple-900/30' : 'bg-blue-900/30';
  const borderColor =
    variant === 'purple' ? 'border-purple-500/50' : 'border-blue-500/50';

  return (
    <div
      className={`${bgColor} ${borderColor} border-l-4 p-4 rounded-r my-4`}
    >
      <div className="text-[var(--text-primary)]">{children}</div>
    </div>
  );
}
