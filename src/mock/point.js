import { POINT_TYPE } from '../const.js';
import { getRandomArrayElement, getRandomInteger, renameKeysToCamel } from '../utils.js';
import { getDestinationId } from './destination.js';
import { getOffersIds } from './offers.js';

const PRICE_MIN = 1100;
const PRICE_MAX = 3000;
const MOCK_POINTS_QUANTITY = 4;

const createPoint = (index) => (
  {
    'base_price': getRandomInteger(PRICE_MIN, PRICE_MAX),
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': getDestinationId(),
    'id': index + 1,
    'is_favorite': Boolean(getRandomInteger(0,1)),
    'offers': getOffersIds(),
    'type': getRandomArrayElement(POINT_TYPE)
  }
);

const renamePoint = (index) => renameKeysToCamel(createPoint(index));
const createMockPoints = Array.from({ length: MOCK_POINTS_QUANTITY }, (_, index) => renamePoint(index));

export { createPoint, createMockPoints };
