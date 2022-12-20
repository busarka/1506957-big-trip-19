import dayjs from 'dayjs';

const EVENT_DATE_FORMAT = 'MMM-DD'; // '2019-07-10T22:55:56.845Z';
const humanizeEventDate = (date) => date ? dayjs(date).format[EVENT_DATE_FORMAT] : '';

const EVENT_START_TIME_FORMAT = 'HH:mm';
const humanizeStartTime = (startTime) => startTime ? dayjs(startTime).format[EVENT_START_TIME_FORMAT] : '';

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomElementsArray = (arr, length) => {
  const value = [];
  while (value.length != length) {
    const newElement = getRandomArrayElement(arr);
    value.push(newElement);
  }
  return value;
};

const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export {getRandomArrayElement, getRandomElementsArray, getRandomInteger, humanizeEventDate, humanizeStartTime};
