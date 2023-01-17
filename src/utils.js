import dayjs from 'dayjs';

const EVENT_DATE_FORMAT = 'MMM-DD';
const humanizeEventDate = (dueDate) => dueDate ? dayjs(dueDate).format(EVENT_DATE_FORMAT) : '';

const EVENT_START_TIME_FORMAT = 'HH:mm';
const humanizeFromToTime = (dueDate) => dueDate ? dayjs(dueDate).format(EVENT_START_TIME_FORMAT) : '';

const differenceTime = (dateOne, dateTwo) => {
  if (dateOne < dateTwo) {
    const temp = dateOne;
    dateOne = dateTwo;
    dateTwo = temp;
  }

  const difference = dateOne.diff(dateTwo, 'minute');
  const hours = Math.floor((difference) / 60);
  const minutes = difference - hours * 60;
  const differenceMinutesAndHours = `${hours}H ${minutes}M`;
  return differenceMinutesAndHours;
};

const favoriteClassName = (isFavorite) => isFavorite ? '--active' : '';

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

export {getRandomArrayElement, getRandomElementsArray, getRandomInteger, humanizeEventDate, humanizeFromToTime, differenceTime, favoriteClassName, renameKeysToCamel};
