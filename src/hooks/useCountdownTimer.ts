import { useState, useEffect } from 'react';

const STORAGE_KEY = 'pascoa-lucrativa-timer-start';
const DURATION = 23 * 3600 + 59 * 60 + 59; // 23h59m59s

export function useCountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    let start = localStorage.getItem(STORAGE_KEY);
    if (!start) {
      const now = Date.now().toString();
      localStorage.setItem(STORAGE_KEY, now);
      start = now;
    }

    const tick = () => {
      const elapsed = Math.floor((Date.now() - Number(start)) / 1000);
      const remaining = DURATION - elapsed;
      if (remaining <= 0) {
        setTimeLeft(0);
        setExpired(true);
      } else {
        setTimeLeft(remaining);
      }
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return {
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
    expired,
  };
}
