import AbstractView from '../framework/view/abstract-view.js';

function noEventsViewTemplate () {
  return (
    // eslint-disable-next-line quotes
    `<p class="trip-events__msg">Click New Event to create your first point</p>`
  );
}

export default class NoEventView extends AbstractView {
  get template() {
    return noEventsViewTemplate();
  }

}


//   <!--
//   Значение отображаемого текста зависит от выбранного фильтра:
//   * Everthing – 'Click New Event to create your first point'
//   * Past — 'There are no past events now';
//   * Present — 'There are no present events now';
//   * Future — 'There are no future events now'.
// -->
