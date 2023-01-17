import { createMockPoints } from '../mock/point.js';


export default class PointsModel {
  points = createMockPoints;

  getPoints() {
    return this.points;
  }
}
