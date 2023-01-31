import { createMockPoints } from '../mock/point.js';

export default class PointsModel {
  #points = createMockPoints;

  get points() {
    return this.#points;
  }
}
