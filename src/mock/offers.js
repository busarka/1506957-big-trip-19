import { getRandomArrayElement, getRandomInteger} from '../utils.js';
import { POINT_TYPE } from '../const.js';

const OFFERS = ['Upgrade to a business class', 'Rent a car', 'Add luggage', 'Book tickets', 'Choose seats', 'Add meal'];
const MIN_OFFERS = 1;
const MAX_OFFERS = OFFERS.length;

const OFFERS_PRICE_MIN = 10;
const OFFERS_PRICE_MAX = 200;

const OFFERS_BY_TYPE_MIN = 1;
const OFFERS_BY_TYPE_MAX = 6;

const createOffer = (index) => (
  {
    'id': index + 1,
    'title': getRandomArrayElement(OFFERS),
    'price': getRandomInteger(OFFERS_PRICE_MIN, OFFERS_PRICE_MAX)
  }
);

const createOffersByType = () => ({
  type: getRandomArrayElement(POINT_TYPE),
  offers: Array.from({length: getRandomInteger(MIN_OFFERS, MAX_OFFERS)}, (_, index) => createOffer(index))
});

const offersByType = Array.from({ length: getRandomInteger(OFFERS_BY_TYPE_MIN, OFFERS_BY_TYPE_MAX) }, createOffersByType);

const getOffersIds = () => {
  const randomOffers = getRandomArrayElement(offersByType).offers;
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

export { getOffersIds, offersByType, createOffer, OFFERS};

