import React, { useEffect } from 'react';
import { render } from 'react-dom';
import useCountDown from './../lib/index';

import './styles.css';

function Demo() {
	const [date, setDate] = useCountDown(new Date(2035, 0, 1, 0, 0, 0, 0));

	useEffect(() => {
		setTimeout(() => {
			setDate(new Date(2022, 1, 19, 0, 0, 0, 0));
		}, 2000);
	}, []);

	useEffect(() => {
		console.log('aaa', date);
	}, [date]);

	return <></>;
}

render(<Demo />, document.getElementById('app'));
