interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
}

export default function CodeBlock({ children, language }: CodeBlockProps) {
  return (
    <div className="my-4">
      {language && (
        <div className="bg-[var(--bg-card)] px-4 py-2 rounded-t border border-b-0 border-[var(--border)] text-sm text-[var(--text-secondary)]">
          {language}
        </div>
      )}
      <pre className={`bg-[var(--bg-card)] p-4 ${language ? 'rounded-b' : 'rounded'} border border-[var(--border)] overflow-x-auto`}>
        <code className="text-sm text-[var(--text-primary)] font-mono">
          {children}
        </code>
      </pre>
    </div>
  );
}
