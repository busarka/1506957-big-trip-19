import { createMockPoints } from '../mock/point.js';
import { renameKeysToCamel } from '../utils.js';

const MOCK_POINTS_QUANTITY = 3;
// const newPoints = Array.from({length:MOCK_POINTS_QUANTITY}, (_, id) => createPoint(id));

console.log(createMockPoints(MOCK_POINTS_QUANTITY));

export default class PointsModel {
  point = createMockPoints(MOCK_POINTS_QUANTITY);

  getPoints() {
    return this.point;
  }
}
