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
  boardContainer;
  points;
  offers;

  constructor({boardContainer, pointsModel, offersModel, /*destinationModel*/}) {
    this.boardContainer = boardContainer;
    this.points = [...pointsModel.points];
    // find offers/dest.name
    this.offers = [...offersModel.offers];
    // this.destinations = [...destinationModel.destination];
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    this.offers = [...this.offersModel.getOffers()];//?????
    this.destination = [...this.destinationModel.getDestinations()];///??????

    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.eventListComponent, this.boardComponent.getElement());
    render(new EditEventView(), this.eventListComponent.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render(new EventView({point: this.points[i]}), this.eventListComponent.getElement());
    }
    // for (let i = 0, i < this.offers.length; i++) {
    //   render()
    // }

    render(new AddEventView(), this.eventListComponent.getElement());
  }
}
// +presenter one more ??

