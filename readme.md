[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

count down to specific date.

#### [Live Demo](https://jameshsu1125.github.io/lesca-use-countdown/)

# Installation

```sh
npm install lesca-use-countdown --save
```

## Usage

```JSX
import { useCountdown } from 'lesca-use-countdown';

const [date, setDate] = useCountDown(new Date(2030, 0, 1, 0, 0, 0, 0)); // to 2030
const [days, hours, minutes, seconds] = date;

return (
    <div>
      <span>{day}</span>days,
      <span>{hour}</span>hours,
      <span>{minute}</span>minutes,
      <span>{second}</span>seconds.
    </div>
)
```

## Development

### Methods

| method                                                                                                             |     description     | default |
| :----------------------------------------------------------------------------------------------------------------- | :-----------------: | ------: |
| useCountdown([date](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date):_date_) | the count down date |    2030 |

### Features

- TypeScript
- maintain if necessary
