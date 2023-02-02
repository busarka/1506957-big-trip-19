import { createElement } from '../render';

function createEventsListTemplate () {
  return (
    '<ul class="trip-events__list"></ul>'
  );
}

export default class EventsListView {
  #element = null;
  get template(){
    return createEventsListTemplate();
  }

  get element(){
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement(){
    this.#element = null;
  }
}
