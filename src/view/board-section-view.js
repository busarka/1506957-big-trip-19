import AbstractView from '../framework/view/abstract-view.js';

function createBoardSectionTemplate () {
  return '<section class="trip-events"></section>';
}

export default class BoardView extends AbstractView {
  get template() {
    return createBoardSectionTemplate();
  }
}
