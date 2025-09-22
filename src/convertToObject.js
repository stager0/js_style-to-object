'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedResult = sourceString.split(';');

  const filteredResult = splittedResult.filter(
    (value) => value.split(':').length === 2,
  );

  return filteredResult
    .map((value) => ({
      [value.split(':')[0].trim()]: value.split(':')[1].trim(),
    }))
    .reduce((prev, curr) => ({ ...prev, ...curr }), {});
}

module.exports = convertToObject;
