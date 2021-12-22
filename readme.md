[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
npm install lesca-use-countdown --save
```

# Usage

```javascript
import { useCountdown } from 'lesca-use-countdown';

const [date, setDate] = useCountDown(new Date(2035, 0, 1, 0, 0, 0, 0)); // to 2035
const [days, hours, minutes, seconds] = date;

return (
    <>
        <div>{days}<div>
        <div>{hours}<div>
        <div>{minutes}<div>
        <div>{seconds}<div>
    </>
)
```

# Methods

| method                    |   options   |                                                  description                                                   |                          default |
| :------------------------ | :---------: | :------------------------------------------------------------------------------------------------------------: | -------------------------------: |
| useCountdown(initialDate) | initialDate | [new Date('your date')](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date) | new Date(2035, 0, 1, 0, 0, 0, 0) |

# Hook State Medthod

| method                                                                                                       | options |   description    | default |
| :----------------------------------------------------------------------------------------------------------- | :-----: | :--------------: | ------: |
| **#setDate( [Date](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date))** |         | same as useState |         |
