import { useEffect, useState } from 'react';

export function useScrollProgress(ref, start = 1, end = 0.5) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let p = 1 - (rect.top - windowHeight * end) / (windowHeight - windowHeight * end);
      p = Math.min(Math.max(p, 0), 1);

      setProgress(p);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, start, end]);

  return progress;
}
