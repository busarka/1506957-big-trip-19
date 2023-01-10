import dayjs from 'dayjs';

const EVENT_DATE_FORMAT = 'MMM-DD'; // '2019-07-10T22:55:56.845Z';
const humanizeEventDate = (dueDate) => dueDate ? dayjs(dueDate).format[EVENT_DATE_FORMAT] : '';

const EVENT_EDIT_DATE_FORMAT = 'DD/MM/YY';
const humanizeEditPointDate = (dueDate) => dueDate ? dayjs(dueDate).format(EVENT_EDIT_DATE_FORMAT) : '';

const EVENT_START_TIME_FORMAT = 'HH:mm';
const humanizeFromToTime = (dueDate) => dueDate ? dayjs(dueDate).format[EVENT_START_TIME_FORMAT] : '';

const DURATION_TIME_FORMAT = 'mm';
const humanizeDurationTime = (dueDate) => dueDate ? dayjs(dueDate).format[DURATION_TIME_FORMAT] : '';


const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomElementsArray = (arr, length) => {
  const value = [];
  // eslint-disable-next-line eqeqeq
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

const renameKeysToCamel = (obj) => Object
  .entries(obj)
  .reduce((acc, [key, val]) => {
    const modifiedKey = key.replace(/_([a-z])/g, g => g[1].toUpperCase());
    return ({
      ...acc,
      ...{ [modifiedKey]: val },
    });
  }, {});

export {getRandomArrayElement, getRandomElementsArray, getRandomInteger, humanizeEventDate, humanizeFromToTime, humanizeEditPointDate,renameKeysToCamel};
