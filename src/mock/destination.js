import { getRandomArrayElement, getRandomElementsArray, getRandomInteger } from '../utils';

const CITIES = ['Chamonix', 'Paris', 'Geneva', 'Amsterdam', 'Munchen', 'Prague'];

const DESCRIPTION = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. ',
  'Fusce tristique felis at fermentum pharetra. ',
  'Aliquam id orci ut lectus varius viverra. ',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. ',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. ',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. ',
  'Sed sed nisi sed augue convallis suscipit in sed felis. ',
  'Aliquam erat volutpat. '
];
const DESCRIPTION_LENGTH_MIN = 1;
const DESCRIPTION_LENGTH_MAX = 6;

const createMockDestination = (index) => (
  {
    'id': index + 1,
    'description': getRandomElementsArray(DESCRIPTION, (getRandomInteger(DESCRIPTION_LENGTH_MIN, DESCRIPTION_LENGTH_MAX))),
    'name': getRandomArrayElement(CITIES),
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${index}`,
        'description': getRandomArrayElement(DESCRIPTION)
      }
    ]
  }
);

const destination = Array.from({length: getRandomInteger(1, 5)}, (_, index) => createMockDestination(index));
const getDestinationId = (getRandomArrayElement(destination)).id;
const getDestinationCity = (getRandomArrayElement(destination)).name;

export {createMockDestination, destination, getDestinationId, getDestinationCity};
