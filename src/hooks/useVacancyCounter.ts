import { useState, useEffect } from 'react';

export function useVacancyCounter(initial = 23) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev > 3 ? prev - 1 : 3));
    }, 45000 + Math.random() * 30000);
    return () => clearInterval(interval);
  }, []);

  return count;
}
