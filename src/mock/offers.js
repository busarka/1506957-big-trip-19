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

const getOffersByTypes = Array.from({ length: getRandomInteger(OFFERS_BY_TYPE_MIN, OFFERS_BY_TYPE_MAX) }, createOffersByType);

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

// const getOffersByType = (offers, type) => offers.find((offer) => offer.type === type).offers;
// console.log(getOffersByType(getOffersByTypes))
// const getOffersIds = (type) => {
//   const offersByType = getOffersByType(getOffersByTypes(), type);
//   console.log(offersByType)
//   if (!offersByType.length) {
//     return [];
//   }
//   const randomOffers = offersByType.slice(getRandomInteger(0, offersByType.length / 2 - 1), getRandomInteger(offersByType.length / 2, offersByType.length));
//   const ids = randomOffers.map((offer) => offer.id);
//   return ids;
// };

export { getOffersIds, getOffersByTypes, createOffer, OFFERS};

