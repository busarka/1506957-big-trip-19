import { getOffersByTypes } from '../mock/offers.js';

export default class OffersModel {
  offers = getOffersByTypes;

  getOffers() {
    return this.offers;
  }
}
