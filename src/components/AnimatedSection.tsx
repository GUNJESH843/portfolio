import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'fade';
  delay?: number;
}

export const AnimatedSection = ({ 
  children, 
  className, 
  animation = 'slide-up',
  delay = 0
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClass = {
    'slide-up': 'scroll-animate',
    'slide-left': 'scroll-animate-left',
    'slide-right': 'scroll-animate-right',
    'scale': 'scroll-animate-scale',
    'fade': 'scroll-animate',
  }[animation];

  return (
    <div 
      ref={ref} 
      className={cn(animationClass, isVisible && 'visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

export const StaggerContainer = ({ children, className }: StaggerContainerProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div ref={ref} className={cn('stagger-children', isVisible && 'visible', className)}>
      {children}
    </div>
  );
};
