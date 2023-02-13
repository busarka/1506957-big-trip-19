import dayjs from 'dayjs';
import { getRandomInteger } from './common.js';

const HOURS_IN_ONE_DAY = 24;
const MINUTES_IN_ONE_HOUR = 60;
const MINUTES_IN_ONE_DAY = 1440;

const ADDED_EVENT_DATE_FORMAT = 'MMM-DD';
const humanizeAddedEventDate = (dueDate) => dueDate ? dayjs(dueDate).format(ADDED_EVENT_DATE_FORMAT) : '';

const ADDED_EVENT_START_TIME_FORMAT = 'HH:mm';
const humanizeFromToTime = (dueDate) => dueDate ? dayjs(dueDate).format(ADDED_EVENT_START_TIME_FORMAT) : '';

const differenceTime = (dateOne, dateTwo) => {
  if (dateOne > dateTwo) {
    const temp = dateOne;
    dateOne = dateTwo;
    dateTwo = temp;
  }

  const difference = dateTwo.diff(dateOne, 'minute');
  const hours = Math.floor((difference) / MINUTES_IN_ONE_HOUR);
  const minutes = difference - hours * MINUTES_IN_ONE_HOUR;
  if (difference > MINUTES_IN_ONE_DAY) {
    const days = Math.trunc(((difference) / (MINUTES_IN_ONE_HOUR)) / HOURS_IN_ONE_DAY);
    return`${days}D ${(Math.trunc(difference / MINUTES_IN_ONE_HOUR)) - (days * HOURS_IN_ONE_DAY)}H ${minutes}M`;
  }
  if (difference < MINUTES_IN_ONE_HOUR && hours === 0) {
    return `${minutes}M`;
  }
  else {
    return `${hours}H ${minutes}M`;
  }
};

const EDIT_EVENT_TIME_FORMAT = 'HH:MM';
const humanizeEditEventDays = (dueDate) => dueDate ? dayjs(dueDate).format(EDIT_EVENT_TIME_FORMAT) : '';

const getRanomTime = () => `${getRandomInteger(2023, 2023)}-${getRandomInteger(1, 12)}-${getRandomInteger(1, 31)}T${getRandomInteger(0, 23)}:${getRandomInteger(0,59)}:${getRandomInteger(0, 59)}`;

const getRightDatePlace = () => {
  const date1 = getRanomTime();
  const date2 = getRanomTime();

  if (dayjs(date1).isAfter(date2)){
    return {
      dateFrom: date2,
      dateTo: date1,
    };
  }
  else {return {
    dateFrom: date1,
    dateTo: date2,
  };}
};

export {humanizeAddedEventDate, humanizeFromToTime, differenceTime, humanizeEditEventDays, getRightDatePlace};
