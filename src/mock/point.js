import { POINT_TYPE } from '../const.js';
import { getRandomArrayElement, getRandomInteger } from '../utils.js';
import { createMockDestination } from './destination.js';
import { createOffersByType, arrayOffersByType } from './offers.js';

const PRICE_MIN = 1100;
const PRICE_MAX = 3000;

const createPoint = (count) => (
  {
    'base_price': getRandomInteger(PRICE_MIN, PRICE_MAX),
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': (getRandomArrayElement(createMockDestination)).id, //????????
    'id': (count), // ?????????????
    'is_favorite': Boolean(getRandomInteger(0,1)),
    'offers': 1, // ????????????
    'type': getRandomArrayElement(POINT_TYPE)
  }
);
console.log(createPoint(2))
const createMockPoints = (count) => Array.from({length:count}, () => createPoint(count));

export { createMockPoints} ;
