import { createMockPoints } from '../mock/point.js';

const POINTS_COUNT = 3;

export default class PointsModel {
  points = createMockPoints(POINTS_COUNT);
  getPoints() {
    return this.points;
  }
}
