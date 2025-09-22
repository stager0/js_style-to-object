'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedResult = sourceString.split(';');
  const newObject = {};

  for (const part of splittedResult) {
    const splittedPart = part.trim().split(':');

    if (splittedPart.length === 2) {
      newObject[splittedPart[0].trim()] = splittedPart[1].trim();
    }
  }

  return newObject;
}

module.exports = convertToObject;
