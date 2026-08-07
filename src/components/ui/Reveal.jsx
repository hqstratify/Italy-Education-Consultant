import { useInView } from '../../hooks/useInView';

/**
 * Restrained scroll-reveal: a short fade + rise, once, on entry.
 * `delay` is in milliseconds and is capped so nothing ever feels slow.
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${Math.min(delay, 400)}ms` }}
      className={[
        'transition-[opacity,transform] duration-[750ms] ease-premium motion-reduce:transition-none',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
}
