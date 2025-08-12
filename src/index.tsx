import { useState, useEffect, useRef } from 'react';

const defaultProps = new Date(2060, 0, 1, 0, 0, 0, 0);
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const tranTimeToArray = (date: Date) => {
  const dat = date.getTime();
  const now = new Date().getTime();
  const distance = dat - now;
  const d = Math.floor(distance / day);
  const h = Math.floor((distance % day) / hour);
  const m = Math.floor((distance % hour) / minute);
  const s = Math.floor((distance % minute) / second);
  if (s < 0) return [0, 0, 0, 0];
  return [d, h, m, s];
};

const useCountdown = (initialState = defaultProps) => {
  const [date, setDate] = useState(initialState);
  const [index, setIndex] = useState(0);
  const [state, setState] = useState(tranTimeToArray(date));
  const ref = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (index !== 0) setState(tranTimeToArray(date));
    ref.current = setTimeout(() => setIndex((c) => c + 1), 1000);
    return () => {
      if (ref.current) clearTimeout(ref.current);
    };
  }, [index]);

  return [
    state,
    (newDate: Date) => {
      setDate(newDate);
    },
  ] as const;
};

export { useCountdown };
export default useCountdown;
