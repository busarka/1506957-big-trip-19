import FilterView from './view/filter-view.js';
import { render } from './render.js';
import BoardPresenter from './presenter/presenter.js';

const siteMainElement = document.querySelector('.trip-events');
const siteFilterElement = document.querySelector('.trip-controls__filters');
const boardPresenter = new BoardPresenter({boardContainer: siteMainElement});

render(new FilterView(), siteFilterElement);

boardPresenter.init();
