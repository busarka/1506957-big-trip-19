import { destinations } from '../mock/destination.js';

export default class DestinationsModel {
  destinations = destinations;

  getDestinations() {
    return this.destinations;
  }
}
