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

const DESTINATION_ID_MIN = 1;
const DESTINATION_ID_MAX = 100;

const createMockDestination = () => (
  {
    'id': getRandomInteger(DESTINATION_ID_MIN, DESTINATION_ID_MAX),
    'description': getRandomElementsArray(DESCRIPTION, (getRandomInteger(DESCRIPTION_LENGTH_MIN, DESCRIPTION_LENGTH_MAX))),
    'name': getRandomArrayElement(CITIES),
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(DESTINATION_ID_MIN, DESTINATION_ID_MAX)}`,
        'description': getRandomArrayElement(DESCRIPTION)
      }
    ]
  }
);

const destinations = Array.from({length: getRandomInteger(1, 5)}, (_, index) => createMockDestination(index));

const getDestinationId = getRandomArrayElement(destinations).id;
// const destination = createMockDestination();
// console.log(destinations)
// console.log(destination)
// console.log(getDestinationId)
// const destinations = [destination];
export {createMockDestination, getDestinationId, destinations};

