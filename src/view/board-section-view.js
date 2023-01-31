import { createElement } from '../render';

function createBoardSectionTemplate () {
  return '<section class="trip-events"></section>';
}

export default class BoardView {
  #element = null;
  get template() {
    return createBoardSectionTemplate();
  }

  get element(){
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeELemenet() {
    this.#element = null;
  }
}

console.log(createBoardSectionTemplate())
