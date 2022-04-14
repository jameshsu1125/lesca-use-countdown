import { Button, ButtonGroup, Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import useCountDown from '../../lib';

const Demo = () => {
  const [year, setYear] = useState(2030);
  const [month, setMonth] = useState(6);

  const [date, setDate] = useCountDown(new Date(year, month));
  const [days, hour, minute, second] = date;

  useEffect(() => {
    setDate(new Date(year, month, 1, 0, 0, 0, 0));
  }, [year, month]);

  return (
    <div className='Demo'>
      <h2>Demo</h2>

      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          required
          id='outlined-required'
          label='Required'
          defaultValue={year}
          type='number'
          onChange={(e) => {
            const { value } = e.target;
            setYear(value);
          }}
        />
        <TextField
          required
          id='outlined-required'
          label='Required'
          defaultValue={month}
          type='number'
          onChange={(e) => {
            const { value } = e.target;
            const m = value - 1;
            setMonth(m < 1 ? 1 : m);
          }}
        />
      </Box>

      <h4>How many days before 2030</h4>
      <pre>
        <code>{`${days}d, ${hour}h / ${minute}m / ${second}s`}</code>
      </pre>
    </div>
  );
};
export default Demo;
