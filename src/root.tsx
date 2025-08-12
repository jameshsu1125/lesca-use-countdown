import ReactDOM from 'react-dom/client';
import { useCountdown } from '.';

const App = () => {
  const [date] = useCountdown(new Date(2030, 0, 1, 0, 0, 0, 0));
  const [days, hours, minutes, seconds] = date;

  return <div>{`${days}d ${hours}h ${minutes}m ${seconds}s`}</div>;
};

ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
