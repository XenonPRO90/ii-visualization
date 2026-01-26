interface SectionHeaderProps {
  children: React.ReactNode;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--text-primary)]">
      [ {children} ]
    </h2>
  );
}
