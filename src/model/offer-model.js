import { offersByType } from '../mock/offers.js';

export default class OffersModel {
  offers = offersByType;

  getOffers() {
    return this.offers;
  }
}
