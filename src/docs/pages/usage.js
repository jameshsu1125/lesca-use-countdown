import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import Code from '../components/code';
import { name } from '../config';

const codes = [
  {
    title: '1. Installation',
    code: `npm install ${name} --save`,
    type: 'text',
  },
  {
    title: '2. Usage',
    code: `import useCountdown from 'lesca-use-countdown';

const [date, setDate] = useCountDown(new Date(2030, 0, 1, 0, 0, 0, 0)); // to 2030
const [day, hour, minute, second] = date;
    `,
    type: 'js',
  },
  {
    title: '3. html',
    code: `<div>
  <span>{day}</span>days, 
  <span>{hour}</span>hours, 
  <span>{minute}</span>minutes, 
  <span>{second}</span>seconds.
</div>`,
    type: 'html',
  },
];

const Usage = () => {
  useEffect(() => {}, []);
  return (
    <div className='Usage'>
      <h2>Usage</h2>
      {codes.map((e) => (
        <div key={e.title}>
          <h3>{e.title}</h3>
          <Code code={e.code} theme={e.type} />
        </div>
      ))}
      <ButtonGroup variant='contained'>
        <Button>click</Button>
      </ButtonGroup>
    </div>
  );
};
export default Usage;
