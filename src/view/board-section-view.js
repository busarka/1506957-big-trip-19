import { createElement } from '../render';

function createBoardSectionTemplate () {
  return '<section class="trip-events"></section>';

};

export default class BoardView {
  getTemplate() {
    return createBoardSectionTemplate();
  }

  getElement(){
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeELemenet() {
    this.element = null;
  }
}


