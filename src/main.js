import FilterView from './view/filter-view.js';
import { render } from './render.js';
import BoardPresenter from './presenter/main-presenter.js';
// import CardPresenter from './presenter/card-presenter.js';
import PointsModel from './model/point-model.js';
import OffersModel from './model/offer-model.js';
import DestinationsModel from './model/destination-model.js';
import BoardView from './view/board-section-view.js';

const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');
console.log(siteMainElement)
const pointsModel = new PointsModel();
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();
const boardPresenter = new BoardPresenter({
  boardContainer: siteMainElement,
  pointsModel,
  offersModel,
  destinationsModel
});

render(new FilterView(), siteFilterElement);

boardPresenter.init();
