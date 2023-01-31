import { getOffersByTypes } from '../mock/offers.js';

export default class OffersModel {
  #offers = getOffersByTypes;

  get offers() {
    return this.#offers;
  }
}
