import { POINT_TYPE } from '../const.js';
import { getRandomArrayElement, getRandomInteger, getRandomElementsArray } from '../utils.js';
import { DESTINATIONS } from './destination.js';
import { offersByType } from './offers.js';

const PRICE_MIN = 1100;
const PRICE_MAX = 3000;
const MOCK_POINTS_QUANTITY = 3;

const createPoint = (id) => (
  {
    'base_price': getRandomInteger(PRICE_MIN, PRICE_MAX),
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': (getRandomArrayElement(DESTINATIONS)).id,
    'id': id + 1,
    'is_favorite': Boolean(getRandomInteger(0,1)),
    // 'offers': (getRandomElementsArray(offersByType, 3)),
    'type': getRandomArrayElement(POINT_TYPE)
  }
);
// eslint-disable-next-line no-return-assign
const createMockPoints = () => Array.from({length:MOCK_POINTS_QUANTITY}, (_, id) => createPoint(id));

export { createMockPoints} ;
