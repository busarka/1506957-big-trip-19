import { getRandomArrayElement, getRandomInteger} from '../utils.js';
import { POINT_TYPE, OFFERS } from '../const.js';

const MIN_OFFERS = 1;
const MAX_OFFERS = OFFERS.length;

const OFFERS_PRICE_MIN = 10;
const OFFERS_PRICE_MAX = 200;

const createOffer = (index) => (
  {
    'id': index + 1,
    'title': getRandomArrayElement(OFFERS),
    'price': getRandomInteger(OFFERS_PRICE_MIN, OFFERS_PRICE_MAX)
  }
);

const createOffersByType = (type) => ({
  type: type,
  offers: Array.from({length: getRandomInteger(MIN_OFFERS, MAX_OFFERS)}, (_, index) => createOffer(index))
});

const getOffersByTypes = POINT_TYPE.map(createOffersByType);

const getOffersIds = () => {
  const randomOffers = getRandomArrayElement(getOffersByTypes).offers;
  const offersIds = [];
  const lengthOfArray = getRandomInteger(1, randomOffers.length);

  while (offersIds.length < lengthOfArray) {
    const currentElement = getRandomInteger(0, randomOffers.length);
    if (!offersIds.includes(currentElement)) {
      offersIds.push(currentElement);
    }
  }
  return offersIds;
};

export { getOffersIds, getOffersByTypes, createOffer};

