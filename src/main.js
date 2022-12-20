import FilterView from './view/filter-view.js';
import { render } from './render.js';
import BoardPresenter from './presenter/presenter.js';
import PointsModel from './model/point-model.js';

const siteMainElement = document.querySelector('.trip-events');
const siteFilterElement = document.querySelector('.trip-controls__filters');
const pointsModel = new PointsModel();
const boardPresenter = new BoardPresenter({
  boardContainer: siteMainElement,
  pointsModel,
});

render(new FilterView(), siteFilterElement);

boardPresenter.init();
