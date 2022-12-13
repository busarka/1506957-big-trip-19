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

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.eventListComponent, this.boardComponent.getElement());
    render(new EditEventView(), this.eventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.eventListComponent.getElement());
    }
    render(new AddEventView(), this.eventListComponent.getElement());
  }
}
