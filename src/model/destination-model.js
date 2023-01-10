import { destination } from '../mock/destination.js';

export default class DestinationsModel {
  destinations = destination;
  getDestinations() {
    return this.destinations;
  }
}
