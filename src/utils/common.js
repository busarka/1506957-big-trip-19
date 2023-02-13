const isFavoriteClassName = (isFavorite) => isFavorite ? '--active' : '';

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomElementsArray = (arr, length) => {
  const value = [];
  // eslint-disable-next-line eqeqeq
  while (value.length != length) {
    const newElement = getRandomArrayElement(arr);
    value.push(newElement);
  }
  return value;
};

const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const renameKeysToCamel = (obj) => Object
  .entries(obj)
  .reduce((acc, [key, val]) => {
    const modifiedKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    return ({
      ...acc,
      ...{ [modifiedKey]: val },
    });
  }, {});

const renameSpacetoDashAndLowerCase = (str) => (str.replace(/ /g, '-')).toLowerCase();

export {getRandomArrayElement, getRandomElementsArray, getRandomInteger, isFavoriteClassName, renameKeysToCamel, renameSpacetoDashAndLowerCase};
