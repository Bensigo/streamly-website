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
        <h2 className={`font-[family-name:var(--font-noto)] font-bold text-4xl lg:text-[56px] leading-tight ${
          light ? 'text-white' : 'text-[var(--text-primary)]'
        }`}>
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
