import SortView from '../view/sort-view.js';
import EventView from '../view/event-view.js';
import EditEventView from '../view/edit-event-view.js';
import EventsListView from '../view/events-list-view.js';
import BoardView from '../view/board-section-view.js';
import AddEventView from '../view/add-event-view.js';
import { render } from '../render.js';
import NoEventView from '../view/no-events-view.js';

export default class BoardPresenter {
  #boardComponent = new BoardView();
  #eventListComponent = new EventsListView();
  #boardContainer = null;
  #pointsModel;
  #offersModel;
  #destinationsModel;
  #points = [];
  #destinations = null;
  #offers = null;

  constructor({boardContainer, pointsModel, offersModel, destinationsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    // this.#points = []; Проверка, что при 0 поинтах, выводится сообщение
    this.#offers = [...this.#offersModel.offers];
    this.#destinations = [...this.#destinationsModel.destinations];

    this.#renderBoard();
  }

  #renderBoard() {
    render(this.#boardComponent, this.#boardContainer);
    if (this.#points.length === 0) {
      render(new NoEventView, this.#boardComponent.element);
    }
    else {
      render(new SortView(), this.#boardComponent.element);
      render(this.#eventListComponent, this.#boardComponent.element);


      for (let i = 0; i < this.#points.length; i++) {
        this.#renderPoint(this.#points[i], this.#destinations, this.#offers);
      }
      render(new AddEventView(), this.#eventListComponent.element);
    }
  }

  #renderPoint(point, destinations, offers) {
    const pointComponent = new EventView({point, destinations, offers});
    const pointEditComponent = new EditEventView({point, destinations, offers});

    const replacePointToForm = () => {
      this.#eventListComponent.element.replaceChild(pointEditComponent.element, pointComponent.element);
    };
    const replaceFormToPoint = () => {
      this.#eventListComponent.element.replaceChild(pointComponent.element, pointEditComponent.element);
    };
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'ESC') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    pointEditComponent.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    });

    pointEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    });

    render(pointComponent, this.#eventListComponent.element);
  }
}
