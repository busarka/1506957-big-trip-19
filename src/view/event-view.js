import dayjs from 'dayjs';
import { createElement } from '../render.js';
import { humanizeAddedEventDate, humanizeFromToTime, differenceTime, isFavoriteClassName} from '../utils.js';

function createEventTemplate ({point, destinations = [], offers = []}) {
  const {
    type: pointType,
    basePrice,
    dateFrom,
    dateTo,
    isFavorite,
    destination: destinationId,
  } = point;

  const findDistintaionName = destinations.find((destinationItem) => destinationItem.id === destinationId).name;
  const findType = offers.find((offersItem) => offersItem.type === pointType).offers;

  const renderOffers = () => findType.map((element) => `<li class="event__offer">
      <span class="event__offer-title">${element.title}</span>
      +€
      <span class="event__offer-price">${element.price}</span>
    </li>`
  ).join('');

  const renderTime = () => `<p class="event__time">
    <time class="event__start-time" datetime="2019-03-18T10:30">${humanizeFromToTime(dateFrom)}</time>
    &mdash;
    <time class="event__end-time" datetime="2019-03-18T11:00">${humanizeFromToTime(dateTo)}</time>
  </p>
  <p class="event__duration">${differenceTime(dayjs(dateFrom),dayjs(dateTo))}</p>`;

  const favoriteClassName = isFavoriteClassName(isFavorite);

  return (`
  <div class="event">
    <time class="event__date" datetime="2019-03-18">${humanizeAddedEventDate(dateFrom)}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${pointType}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${pointType} ${findDistintaionName}</h3>
    <div class="event__schedule">${renderTime()}
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">${renderOffers()}
    </ul>
    <button class="event__favorite-btn event__favorite-btn${favoriteClassName}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
`);
}

export default class EventView {
  point = null;
  destinations = [];
  offers = [];

  constructor ({point, destinations, offers}){
    this.point = point;
    this.destinations = destinations;
    this.offers = offers;
  }

  getTemplate(){
    return createEventTemplate({
      point: this.point,
      destinations: this.destinations,
      offers: this.offers,
    });
  }

  getElement(){
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement(){
    this.element = null;
  }
}
