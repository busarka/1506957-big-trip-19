import { destinations } from '../mock/destination.js';

export default class DestinationsModel {
  #destinations = destinations;

  get destinations() {
    return this.#destinations;
  }
}
