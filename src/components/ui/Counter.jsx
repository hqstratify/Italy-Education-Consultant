import { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Counts up once, on entry. The final value is always present in the DOM for
 * assistive technology via aria-label, so the animation is purely decorative.
 */
export default function Counter({ value, suffix = '', unit = '', duration = 1400, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion()) {
      setDisplay(value);
      return;
    }

    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${value}${suffix}${unit}`}>
      <span aria-hidden="true">
        {display}
        {suffix}
        {unit}
      </span>
    </span>
  );
}
