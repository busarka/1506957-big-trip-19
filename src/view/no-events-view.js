import { createElement } from '../render.js';

function noEventsViewTemplate () {
  return (
    // eslint-disable-next-line quotes
    `<p class="trip-events__msg">Click New Event to create your first point</p>`
  );
}

export default class NoEventView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return noEventsViewTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}


//   <!--
//   Значение отображаемого текста зависит от выбранного фильтра:
//   * Everthing – 'Click New Event to create your first point'
//   * Past — 'There are no past events now';
//   * Present — 'There are no present events now';
//   * Future — 'There are no future events now'.
// -->
