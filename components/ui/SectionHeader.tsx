import FadeIn from '@/components/animations/FadeIn';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  action?: React.ReactNode;
}

export default function SectionHeader({ title, subtitle, align = 'center', light = false, action }: SectionHeaderProps) {
  return (
    <FadeIn className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : ''} ${action ? 'flex items-end justify-between' : ''}`}>
      <div>
        <h2 className={`display-heading-lg ${
          light ? 'text-white' : 'text-[var(--text-primary)]'
        }`} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-4 text-lg ${light ? 'text-cyan' : 'text-[var(--text-tertiary)]'}`}>
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </FadeIn>
  );
}
