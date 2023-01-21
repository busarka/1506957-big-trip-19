import SortView from '../view/sort-view.js';
import EventView from '../view/event-view.js';
import EditEventView from '../view/edit-event-view.js';
import EventsListView from '../view/events-list-view.js';
import BoardView from '../view/board-section-view.js';
import AddEventView from '../view/add-event-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  eventListComponent = new EventsListView();
  // boardContainer;
  // points;
  // offers;
  // destinations;

  constructor({boardContainer, pointsModel, offersModel, destinationsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
    this.offersModel = offersModel;
    this.destinationsModel = destinationsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    this.offers = [...this.offersModel.getOffers()];
    this.destinations = [...this.destinationsModel.getDestinations()];

    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.eventListComponent, this.boardComponent.getElement());
    render(new EditEventView({point: this.points[0], destinations: this.destinations, offers: this.offers}), this.eventListComponent.getElement());

    for (let i = 1; i < this.points.length; i++) {
      const eventView = new EventView({point: this.points[i], destinations: this.destinations, offers: this.offers});
      render(eventView, this.eventListComponent.getElement());
      console.log(eventView)
    }
    render(new AddEventView(), this.eventListComponent.getElement());
  }
}

